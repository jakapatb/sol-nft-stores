import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React from 'react'
import { Title } from './Title'

export const FAQ: React.FC = () => {
	return (
		<div>
			<Title>FAQ</Title>
			{faqList.map(({ question, answer }, index) => (
				<Accordion key={'faq' + index}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls={`panel${index}bh-content`}
						id={`panel${index}bh-header`}
					>
						<Typography sx={{ width: '33%', flexShrink: 0 }}>{question}</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>{answer}</Typography>
					</AccordionDetails>
				</Accordion>
			))}
		</div>
	)
}

const faqList = [
	{
		question: 'How can i buy An RobertX?',
		answer:
			'RobertX purchasing happens through our ‘Apeintosh’ which can be found at the top of the website. When minting commences, login to the computer with the ‘super secret’ password, connect your wallet and click on ‘mint.exe’. Follow the prompted procedures'
	},
	{
		question: 'When is The Drop? How Much?',
		answer:
			'The drop date is ระบุวันและเวลาดรอป (follow our social channels for exact times). Mint price, or ‘enrolment fee’) is 1 SOL.'
	},

	{
		question: 'Can i mint on my mobile?',
		answer:
			'Yes, you will be able to mint through Sollet on your mobile. To use Phantom please connect to your computer.'
	},
	{
		question: 'Is there a limit?',
		answer:
			'Yes and no. We will be limiting people to 1 RobertX per transaction. This does mean you can return to the mint section as many times as you want though.'
	},
	{
		question: 'How many traits RobertX in the world?',
		answer:
			'Our student RobertX have a total7 total different categories (Battery,Sticker,Head, Body (Clothing), Horn, Eye, and background). You can see them in all their glory in the traits section of the website.'
	},
	{
		question: 'Do you have a rarity system?',
		answer:
			'Yes, rarity is incredibly important to us. So much so that we have designed a trait hierarchy system that lists the traits from ‘Rare’ all the way through to ‘Ultra Rare’ and each rank has a corresponding % chance of being minted. All of the Cybert City and their rarity % can be viewed over in our ‘Cyber City’ section.'
	},
	{
		question: 'Are there secondary sale royalties?',
		answer:
			'We will be contributing 10% of this back into the community vault and charity UNFCCC for future Cyber City expansion.'
	},
	{
		question: 'Do i own  RobertX after purchasing?',
		answer:
			'Yes, full intellectual properties are given to the buyer. You can learn more about your rights as a RobertX holder in our terms section.'
	}
]
