import React from 'react'
import { FiThumbsUp } from 'react-icons/fi';
import {CardContainer, Content, HasInfo, ImageBackground, PostInfo,
        UserInfo, UserPicture, } from './styles';
import { banner } from '../../assets';
import { retrato } from '../../assets';
const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src={banner} alt="Post" />
        <Content>
            <UserInfo>
                <UserPicture src={retrato} alt="User" />
                <div>
                    <h4>Luis</h4>
                    <p>Há 4 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto academico</h4>
                <p>Sabor projeto <strong>felas</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JS</h4>
                <p>
                    <FiThumbsUp /> 10 
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export  {Card};