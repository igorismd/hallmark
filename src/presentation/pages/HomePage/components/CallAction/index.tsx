import React, { FC } from 'react';
import { Button, Typo } from '../../../../ui-kit';
import ContentAppear from '../../../../components/ContentAppear';
import './styles.sass';

const handleClickScroll1 = () => {
  const element = document.getElementById('section-1');
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const CallAction: FC = () => (
  
  <div className="call-action__wrapper">
    <section className="call-action">
      <ContentAppear>
        <Typo.H2>Ready to discuss <span className="call-action__title-blue">Your project details?</span></Typo.H2>
        {/* <Button >Request a call</Button> */}
        <button className="button" onClick={handleClickScroll1}>Request a call</button>
      </ContentAppear>
    </section>
  </div>
);

export default CallAction;
