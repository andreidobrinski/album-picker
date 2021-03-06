import React from 'react';
import GithubCorner from 'react-github-corner';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Tooltip } from 'react-tippy';
import Curators from './curators';
import { colours } from './theme';
import {
  AppBG, CuratorsWrap, CuratorLink, EmailButton, Cta,
} from './styled';
import { Text, SmallerText } from './labels/styled';

const Intro = () => (
  <AppBG>
    <GithubCorner
      href="https://github.com/andreidobrinski/album-picker"
      target="_blank"
      rel="noopener noreferrer"
      bannerColor={colours.cta}
      svgStyle={{ mixBlendMode: 'darken' }}
    />
    <Text>
      Welcome to Album Picker
    </Text>
    <SmallerText>
      The idea is simple: add your record collection,
      or a list of your favourite albums to your Google Sheet.
      When you want to listen to something you love for an hour, but don&apos;t know exactly what,
      press the button.
    </SmallerText>
    <SmallerText>
      Tap your name below to go to your page.
      Save that page in your bookmarks for quick access.
    </SmallerText>
    <Cta>
      <SmallerText noMargin>
        Want a list of your own?&nbsp;
      </SmallerText>
      <div style={{ display: 'flex' }}>
        <Tooltip
          title="Email copied to clipboard"
          trigger="click"
          animation="scale"
        >
          <CopyToClipboard
            text="dobrinski.andrei@gmail.com"
          >
            <EmailButton>
              Send me an email
            </EmailButton>
          </CopyToClipboard>
        </Tooltip>
        <SmallerText noMargin>
          &nbsp;and I&apos;ll get you set up.
        </SmallerText>
      </div>
    </Cta>
    <CuratorsWrap>
      {Object.keys(Curators).map(curator => (
        <CuratorLink to={Curators[curator].route} key={curator}>
          <SmallerText>
            {Curators[curator].name}
          </SmallerText>
        </CuratorLink>
      ))}
    </CuratorsWrap>
  </AppBG>
);

export default Intro;
