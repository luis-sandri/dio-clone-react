import React from 'react';
import { Container, NameText, Progress, UserPicture } from './styles.ts';
import { IUserInfo } from './types.ts';
const UserInfo = ({name, image, percentual}: IUserInfo) => {
  return (
    <Container>
        <UserPicture src={image} />
        <div>
            <NameText>{name}</NameText>
            <Progress percentual={percentual}/>
        </div>
    </Container>
  )
}

export default UserInfo;