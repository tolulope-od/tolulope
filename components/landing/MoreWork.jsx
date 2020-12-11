import * as React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  SectionDescription as SectionBody,
  Highlighted,
} from '../layout/styles/layout';
import { ReactComponent as CarrotSuiteLogo } from '../../public/carrotsuite.svg';
import { ReactComponent as NIBSSLogo } from '../../public/nibss.svg';
import { ReactComponent as AndelaLogo } from '../../public/andela.svg';

const MoreWorkFlex = tw.div`flex flex-wrap`;
const SingleWorkCardContainer = tw.div`w-full lg:w-1/2 md:px-4 lg:px-6 py-5`;
const SingleWorkCardBody = tw.div`bg-white rounded-md dark:bg-green-100 hover:shadow-xl`;
const SingleWorkImageContainer = tw.div``;
const SingleWorkImage = tw.img`h-56 w-full rounded-md border-white border-8 hover:opacity-25`;
const SingleWorkBody = tw.div`px-6 py-4 md:px-10`;
const SingleWorkTitle = styled.h1`
  min-height: 70px;
  ${tw`font-eesti text-2xl py-2`}
`;
const SingleWorkDescription = tw.p`text-sm text-primary py-1`;
const SingleWorkCardFooter = tw.div`flex justify-between pt-8 pb-4`;
const SingleWorkClientInfo = tw.div`w-full md:w-1/3 text-sm font-medium`;

const MotionSectionBody = motion.section;

const svgStyle = { marginLeft: '-2rem' };

const NIBSS = (<NIBSSLogo style={svgStyle} width="100px" height="20px" className="text-primary" />);
const Andela = (<AndelaLogo style={{ ...svgStyle, marginLeft: '-1.25rem' }} width="100px" height="20px" className="text-primary" />);

const workData = [
  {
    projectName: 'Industry Dispute Resolution System (IDRS)',
    description: 'An application that enables the Deposit Money Banks in Nigeria to raise card transaction disputes and resolve them while also providing a repository of all card transaction journals.',
    imageUrl: '/images/idrs-screenshot.png',
    clientName: NIBSS,
    url: 'https://idrs.nibss-plc.com.ng/',
  },
  {
    projectName: 'CarrotSuite',
    description: 'An enterprise to streamline entire business workflows; teams, sales, projects, tasks, accounting, CRM, HR and reports to maximize productivity while cutting down costs.',
    imageUrl: '/images/carrotsuite-screenshot.png',
    clientName: <CarrotSuiteLogo style={{ ...svgStyle, marginLeft: '-1.25rem' }} width="100px" height="30px" className="text-primary" />,
    url: 'https://carrotsuite.com.ng/',
  },
  {
    projectName: 'Approval Workflow',
    description: 'An application that is used to automate the processes of documents/policies that need to go through an approval chain to be reviewed in order to be fully implemented or treated.',
    imageUrl: '/images/approval-workflow-screenshot.png',
    clientName: NIBSS,
    url: 'https://approvalworkflow.nibss-plc.com.ng/',
  },
  {
    projectName: 'Authors\' Haven',
    description: 'Authors\' Haven is a social platform for authors to create articles and read articles posted by other authors. I worked on this project with a team of other developers.',
    imageUrl: '/images/authors-haven-screenshot.png',
    clientName: Andela,
    url: 'http://mazus-authors-haven-staging.herokuapp.com',
  },
  {
    projectName: 'Banka',
    description: 'Banka is a personal project that I built which enables users to create and open bank accounts and also allow admins/cashiers to deposit and credit accounts on behalf of the customers.',
    imageUrl: '/images/banka-screenshot.png',
    clientName: 'Personal',
    url: 'https://tolulope-od.github.io/banka',
  },
  {
    projectName: 'ProsLink',
    description: 'Proslink is a personal project I built which is basically a very lightweight version of LinkedIn that allows professionals to find and follow each other while creating captivating posts.',
    imageUrl: '/images/proslink-screenshot.png',
    clientName: 'Personal',
    url: 'http://proslink.herokuapp.com',
  },
];

const MoreWork = () => (
  <MotionSectionBody
    variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
    transition={{ duration: 0.3 }}
  >
    <SectionBody>
      <MoreWorkFlex>
        {workData.map((data, index) => (
          <SingleWorkCardContainer key={`${data.projectName}-${index}`}>
            <SingleWorkCardBody>
              <SingleWorkImageContainer>
                <SingleWorkImage
                  loading="lazy"
                  src={data.imageUrl}
                  alt={`Screenshot of ${data.projectName}`}
                />
              </SingleWorkImageContainer>
              <SingleWorkBody>
                <SingleWorkTitle>
                  {data.projectName}
                </SingleWorkTitle>
                <SingleWorkDescription>
                  {data.description}
                </SingleWorkDescription>
                <SingleWorkCardFooter>
                  <SingleWorkClientInfo>
                    {data.clientName}
                  </SingleWorkClientInfo>
                  <div className="1/2">
                    <div className="text-sm font-medium">
                      <Highlighted>
                      <span className="inline-button">
                        <a href={data.url} className="decoration-none" target="_blank">Visit</a>
                      </span>
                      </Highlighted>
                      {/*<a href="" className="text-red-600 px-1 ">*/}
                      {/*  Visit*/}
                      {/*</a>*/}
                    </div>
                  </div>
                </SingleWorkCardFooter>
              </SingleWorkBody>
            </SingleWorkCardBody>
          </SingleWorkCardContainer>
        ))}
      </MoreWorkFlex>
    </SectionBody>
  </MotionSectionBody>
);

export default MoreWork;
