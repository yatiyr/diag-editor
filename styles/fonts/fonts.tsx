import { Global } from "@emotion/react";
import { Inter } from "styles/fonts/inter";
import { Montserrat } from "styles/fonts/montserrat";
import { Inconsolata } from "styles/fonts/inconsolata";
import { OpenSans } from "styles/fonts/openSans";
import { SourceCodePro } from "styles/fonts/sourceCodePro";
import { Ubuntu } from "styles/fonts/ubuntu";
import { UbuntuMono } from "styles/fonts/ubuntuMono";
import { JetBrainsMono } from "styles/fonts/jetBrainsMono";

const Fonts = () => (
  <>
    <Global styles={Inter}/>
    <Global styles={Montserrat}/>
    <Global styles={Inconsolata}/>
    <Global styles={OpenSans}/>
    <Global styles={SourceCodePro}/>
    <Global styles={Ubuntu}/>
    <Global styles={UbuntuMono}/>
    <Global styles={JetBrainsMono}/>
  </>
)
export default Fonts;