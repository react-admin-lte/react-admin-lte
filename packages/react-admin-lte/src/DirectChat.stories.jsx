import React from 'react';
import { action, storiesOf } from '@kadira/storybook';
import alexanderPierceImage from 'admin-lte/dist/img/user1-128x128.jpg';
import sarahBullockImage from 'admin-lte/dist/img/user3-128x128.jpg';
import { DirectChat } from '.';

storiesOf('DirectChat', module)
  .addDecorator(story =>
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        width: 400,
      }}
    >{story()}</div>
  )
  .add('default', () => (
    <DirectChat
      onSubmitMessage={action('submit')}
      messageNumber={3}
      style="primary"
      title="Direct Chat"
    >
      <DirectChat.MessageList>
        <DirectChat.Message
          name="Alexander Pierce"
          timestamp="23 Jan 2:00 pm"
        >
          <DirectChat.Image src={alexanderPierceImage} alt="Message User Image" />
          <DirectChat.Text>Is this really for free? That's unbelievable!</DirectChat.Text>
        </DirectChat.Message>
        <DirectChat.Message
          name="Sarah Bullock"
          timestamp="23 Jan 2:05 pm"
          right
        >
          <DirectChat.Image src={sarahBullockImage} alt="Message User Image" />
          <DirectChat.Text>You better believe it!</DirectChat.Text>
        </DirectChat.Message>
      </DirectChat.MessageList>
      <DirectChat.ContactList>
        <DirectChat.Contact onClick={action('click')}>
          <DirectChat.ContactImage src={alexanderPierceImage} alt="User Image" />
          <DirectChat.ContactInfo
            name="Count Dracula"
            date="2/28/2015"
          >
            How have you been? I was...
          </DirectChat.ContactInfo>
        </DirectChat.Contact>
      </DirectChat.ContactList>
    </DirectChat>
  ));
