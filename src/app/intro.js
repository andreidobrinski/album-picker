import React from 'react';
import GithubCorner from 'react-github-corner';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Tooltip } from 'react-tippy';
import { colours } from './theme';
import { AppBG, CuratorsWrap, CuratorLink, EmailButton } from './styled';
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
      Welcome to the Album Picker
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
    <SmallerText>
      Want a list of your own?&nbsp;
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
      &nbsp;and I&apos;ll get you set up.
    </SmallerText>
    <CuratorsWrap>
      <CuratorLink to="/andrei">
        <SmallerText>Andrei</SmallerText>
      </CuratorLink>
      <CuratorLink to="/amanda">
        <SmallerText>Amanda</SmallerText>
      </CuratorLink>
      <CuratorLink to="/aaron">
        <SmallerText>Aaron</SmallerText>
      </CuratorLink>
      <CuratorLink to="/kathleenkyle">
        <SmallerText>Kathleen and Kyle</SmallerText>
      </CuratorLink>
    </CuratorsWrap>
  </AppBG>
);

export default Intro;
