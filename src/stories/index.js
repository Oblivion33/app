import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Button from '../components/Forms/Button'
import TextInput from '../components/Forms/TextInput'
import { Participant } from '../components/SingleEvent/Participant'
import client from '../testing-utils/mockedClient'
import { ApolloProvider } from 'react-apollo'

storiesOf('<Button>', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Ariel Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ))
  .add('with text with wide prop', () => (
    <Button wide onClick={action('clicked')}>
      RSVP
    </Button>
  ))

storiesOf('<Button type="hollow">', module)
  .add('with text', () => (
    <Button type="hollow" onClick={action('clicked')}>
      RSVP
    </Button>
  ))
  .add('with some emoji', () => (
    <Button type="hollow" onClick={action('clicked')}>
      😀 😎 👍 💯
    </Button>
  ))
  .add('with text with wide prop', () => (
    <Button type="hollow" wide onClick={action('clicked')}>
      RSVP
    </Button>
  ))

storiesOf('<Button type="disabled">', module)
  .add('with text', () => (
    <Button type="disabled" onClick={action('clicked')}>
      RSVP
    </Button>
  ))
  .add('with some emoji', () => (
    <Button type="disabled" onClick={action('clicked')}>
      😀 😎 👍 💯
    </Button>
  ))
  .add('with text with wide prop', () => (
    <Button type="disabled" wide onClick={action('clicked')}>
      RSVP
    </Button>
  ))

storiesOf('<TextInput type="text">', module)
  .add('default', () => <TextInput />)
  .add('error', () => <TextInput error errorMessage="Boom" />)

const mockParticipant = {
  participantName: 'Vitalik Buterin',
  address: '0x123',
  paid: false,
  attended: false
}

const mockParty = {
  registered: 10,
  attended: 10,
  deposit: 0.02,
  ended: false
}

const mockMarkedAttendedList = []

storiesOf('<Participant participant={mockParticipant}>', module).add(
  'default',
  () => (
    <ApolloProvider client={client}>
      <Participant
        markAttended={action('clicked attend')}
        ummarkAttended={action('clicked unattend')}
        participant={mockParticipant}
        markedAttendedList={mockMarkedAttendedList}
        party={mockParty}
      />
    </ApolloProvider>
  )
)
