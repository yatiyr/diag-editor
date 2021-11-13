import type { NextPage } from 'next'

import BaseLayout from 'components/layouts/BaseLayout';
import Sidebar from 'components/editor/Sidebar';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import SplitPane from 'react-split-pane';
import Diagram from 'components/editor/diagram/Diagram';
import useWindowDimensions from 'utils/hooks/UseWindowDimensions';
import PropOutGroup from 'components/editor/diagramUtils/PropOutGroup';
import Console from 'components/editor/diagramUtils/Console';

const Editor: NextPage = () => {

  const indexBackgroundColor = useColorModeValue("white", "gray.900");

  const {height, width}      = useWindowDimensions();

  return (
    <>
      <BaseLayout>
        {/* This is the main container of editor */}
        <Flex 
          flexDirection="row"
          height="100vh"
          backgroundColor={indexBackgroundColor}
          transition="color .3s, background-color .3s">
            {/* <Sidebar/> */}
            {/* This is the container for diagram, console, output and properties */}
            <Flex
              flexDirection="column"
              height="100%"
              width="100%"
              backgroundColor={indexBackgroundColor}
              transition="color .3s, background-color .3s"
              position="relative">
              <SplitPane primary="first" defaultSize={5*height/8} maxSize={3*height/4} split="horizontal">
                <Diagram/>
                <SplitPane primary="second" minSize={1*width/5} defaultSize={1*width/5} maxSize={3*width/5} split="vertical">
                  <PropOutGroup/>
                  <Console/>            
                </SplitPane>
              </SplitPane>
            </Flex>
        </Flex>
      </BaseLayout>  
    </>
  )
}

export default Editor;
