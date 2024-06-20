import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Box,
} from '@chakra-ui/react';
import './introduction.css';
import homeLogo from './../../Assets/home-logo.svg';
import { Image } from '@chakra-ui/react';
import { useContext } from 'react';
import ResumeContext from '../../Context/ResumeContext';
import ThemeTemplateData from '../../db/ThemeTemplateData';

export default function Introduction() {
  const {
    selectBtn,
    setSelectBtn,
    setCurrentTheme,
    showComponent,
    setShowComponent,
  } = useContext(ResumeContext);

  const handleSelectTemplate = () => {
    setSelectBtn(!selectBtn);
  };

  const showTheme = (e) => {
    setShowComponent(!showComponent);
    setCurrentTheme(e.target.id);
  };

  return (
    <>
      <Container
        my={{ base: 1.5, md: 16 }}
        justifyContent={'space-between'}
        flexDirection={{ base: 'column', md: 'row', sm: 'column' }}
        display={'flex'}
        alignItems={'center'}
        maxW={'7xl'}
      >
        <Stack
          width={{ base: '95%', md: '47%' }}
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 1.5, md: 10, sm: '14' }}
        >
          {selectBtn ? (
            <>
              <Heading
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                lineHeight={'110%'}
              >
                Your resume in three{' '}
                <Text as={'span'} color={'#805AD5'}>
                  easy{' '}
                </Text>
                steps
              </Heading>

              <Text color={'gray.500'} maxW={'3xl'}>
                Resume builder tools that create well-formatted resumes. A
                resume builder allows you to construct a professional-looking
                resume in a few simple clicks. This resume maker provides
                various template possibilities, allowing you to select the
                template that best suits your demands and style.
              </Text>

              <Flex
                _dark={{ color: 'gray.50' }}
                textAlign={'start'}
                flexDirection={'column'}
                w={'full'}
              >
                <Box className="Bullet_Points">
                  <Button>1</Button>
                  <Text
                    _dark={{ color: 'gray.400' }}
                    color={'gray.900'}
                    fontSize={'xl'}
                  >
                    Select a template from our collection.
                  </Text>
                </Box>
                <Box className="Bullet_Points">
                  <Button>2</Button>
                  <Text
                    _dark={{ color: 'gray.400' }}
                    color={'gray.900'}
                    fontSize={'xl'}
                  >
                    Build you resume using our easy to use resume builder.
                  </Text>
                </Box>
                <Box className="Bullet_Points">
                  <Button>3</Button>
                  <Text
                    _dark={{ color: 'gray.400' }}
                    color={'gray.900'}
                    fontSize={'xl'}
                  >
                    Download your resume.
                  </Text>
                </Box>
              </Flex>
            </>
          ) : (
            <Heading
              m={'1.5'}
              textAlign={{ base: 'center', md: 'start' }}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}
            >
              Select a{' '}
              <Text as={'span'} color={'#805AD5'}>
                Template{' '}
              </Text>
              from the list
            </Heading>
          )}
        </Stack>

        {selectBtn ? (
          <Stack>
            <Image src={homeLogo} width={'500px'} alt="home logo" my={'4'} />
            <Button
              onClick={handleSelectTemplate}
              rounded={'full'}
              px={6}
              className="mb-4"
              colorScheme={'purple'}
              bg={'#805AD5'}
              _hover={{ bg: '#6B46C1' }}
            >
              Select Template
            </Button>
          </Stack>
        ) : (
          <>
            <Box maxW={{ base: '100%', md: '61%' }} className="templatesList">
              {ThemeTemplateData.map((item, index) => {
                return (
                  <div key={index} className="template" onClick={showTheme}>
                    <img id={item.id} src={item.imageSrc} alt={item.imageAlt} />
                  </div>
                );
              })}
            </Box>
          </>
        )}
      </Container>
    </>
  );
}
