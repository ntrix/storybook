import React, { Component } from "react";
import bell from "../img/bell.png";
export default class Notification extends Component {
  render() {
    const { hasUnread } = this.props;
    return (
      <div className="notify">
        <img src={bell} className="bell" alt="" />
        {hasUnread && <div className="has-unread" />}
      </div>
    );
    // Component này dùng để hiển thị icon hình quả chuông như hình dưới
    // Screenshot: https://cdn.glitch.com/6ecf0067-b2e5-4d35-b27d-e91d326d2da4%2FPasted_Image_4_20_20__8_35_PM.png?v=1587382516834
    // Có chấm đỏ là một thẻ div, biểu thị rằng đang có notification chưa đọc
    // Sử dụng prop `hasUnread` để điều khiển việc hiển thị chấm đỏ
    // Cho biết hasUnread là một boolean
    // Dùng icon ở flaticon.com
    // Thêm component này vào App component để test
  }
}
