// src/views/detail/components/action/index.tsx
// 作者：曹继承
import React, { FC } from "react";
import {
  StarOutline,
  ShopbagOutline,
  MessageOutline,
  StarFill,
} from "antd-mobile-icons";
import "./index.scss";
import { Button } from "antd-mobile";
interface IActionBarProps {
  BgColor?: string;
  CartText?: string;
  CartTextColor?: string;
  buyTextColor?: string;
  BuyText?: string;
  CartColor?: string;
  buyColor?: string;
  cart?: boolean;
  buy?: boolean;
  Customer?: boolean;
  CustomerClick?: any;
  shop?: boolean;
  shopClick?: any;
  star?: boolean;
  onStar?: boolean;
  onStarColor?: string;
  starClick?: any;
  CartClick?: any;
  BuyClick?: any;
}

const ActionBar: FC<IActionBarProps> = ({
  BgColor = "#fff",
  CartText = "加入购物车", //购物车文字默认值
  BuyText = "立即购买", //默认值
  CartColor = "#7233d9", //购物车按钮颜色默认值
  CartTextColor = "#fff", //购物车字体默认值
  buyColor = "#ff64fe", //默认值
  buyTextColor = "#fff", //默认值
  onStarColor = "#76c6b8",//收藏选中颜色默认值
  cart = true, //购物车按钮是否存在
  buy = true, //购买按钮是否存在
  Customer = true, //客服按钮是否存在
  onStar = false, //星星选中状态
  shop = true, //购物袋按钮是否存在
  star = true,//收藏按钮是否存在
  CustomerClick = () => { },
  shopClick = () => { },
  starClick = () => { },
  CartClick = () => { },
  BuyClick = () => { },
}) => {
  return (
    <>
      <div className="action_box" style={{ backgroundColor: BgColor }}>
        <div
          className="action_Customer action_item"
          style={{ display: Customer ? "" : "none" }}
          onClick={(event) => CustomerClick()}
        >
          <MessageOutline />
          <p>客服</p>
        </div>
        <div
          className="action_shop action_item"
          style={{ display: shop ? "" : "none" }}
          onClick={(event) => shopClick()}
        >
          <ShopbagOutline />
          <p>店铺</p>
        </div>
        <div
          className="action_star action_item"
          style={{ display: star ? "" : "none" }}
          onClick={(event) => {
            starClick();
          }}
        >
          {(function fn() {
            return onStar ? <StarFill color={onStarColor} /> : <StarOutline />;
          })()}
          <p>收藏</p>
        </div>
        <div className="button">
          <Button
            className="action_goBuy"
            style={{
              color: buyTextColor,
              backgroundColor: buyColor,
              display: buy ? "" : "none",
            }}
            onClick={() => BuyClick()}
          >
            {BuyText}
          </Button>
          <Button
            className="action_addCart"
            style={{
              color: CartTextColor,
              backgroundColor: CartColor,
              display: cart ? "" : "none",
            }}
            onClick={() => CartClick()}
          >
            {CartText}
          </Button>
        </div>
      </div>
    </>
  );
};

export default ActionBar;
