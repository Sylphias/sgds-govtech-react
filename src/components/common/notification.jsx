import React, { Component } from "react";

class Notification extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hovered: false
      };
    }
  
    render() {
      return (
        <div class="sgds-notification">
            <div class="sgds-notification-detail">
                    <div class="sgds-notification-content">
                        <p class="has-text-weight-bold">Updates</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aut dicta,
                            ea facere fugit incidunt laborum officia quod unde.</p>
                    </div>
                <span class="delete" id="cancel-notification"></span>
            </div>
        </div>
      );
    }
  }
  
  export default Notification;