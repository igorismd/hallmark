import React, { FC } from 'react';
import { Button, Typo } from '../../../../ui-kit';
import ContentAppear from '../../../../components/ContentAppear';
import './styles.sass';

const CallAction: FC = () => (
  <div className="call-action__wrapper">
    <section className="call-action">
      <ContentAppear>
        <Typo.H2>Ready to discuss <span className="call-action__title-blue">Your project details?</span></Typo.H2>
        <Button href="#contactUs">Request a call</Button>
      </ContentAppear>
    </section>
  </div>
);

export default CallAction;
