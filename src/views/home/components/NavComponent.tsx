import React, { FC } from 'react';
import { Grid, Image } from 'antd-mobile'

interface INav {
  navid: number
  title: string
  imgurl: string
}
interface INavComponentProps {
  list: INav[]
};
const Nav:FC<INavComponentProps> = ({list}) => {


  return (
<Grid columns={5} gap={0}>
      {
        list && list.map(item => {
          return (
            <Grid.Item key = {item.navid} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <Image src={ item.imgurl } style={{ width: 44, height: 44 }}></Image>
              <p>{ item.title }</p>
            </Grid.Item>
          )
        })
      }
    </Grid>
)

};

export default Nav;