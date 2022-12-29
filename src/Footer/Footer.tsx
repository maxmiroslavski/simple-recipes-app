import React from 'react';

import styled from 'styled-components';

import { TiSocialInstagram } from 'react-icons/ti';
import { TiSocialTwitter } from 'react-icons/ti';
import { TiSocialYoutube } from 'react-icons/ti';

import { ContainerBounding } from '../Card/ContainerBounding';

import { FooterStyled, FooterWrapperStyled, SocialMedia } from './FooterStyled';

const Footer = () => {
	return (
		<FooterStyled>
			<ContainerBounding>
				<FooterWrapperStyled>
					<SocialMedia>
						<li>
							<TiSocialInstagram />
						</li>
						<li>
							<TiSocialTwitter />
						</li>
						<li>
							<TiSocialYoutube />
						</li>
					</SocialMedia>
					<span className="copyright">©2022 Simple Recipes</span>
				</FooterWrapperStyled>
			</ContainerBounding>
		</FooterStyled>
	);
};

export { Footer };
