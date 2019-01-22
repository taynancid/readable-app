import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong style={{ fontFamily: "Bungee Inline" }}>Readable</strong> by{" "}
            <a href="https://www.linkedin.com/in/taynan-siqueira-611596144/">
              Taynan Cid Siqueira
            </a>
            .
          </p>
          <p>
            <a href="https://github.com/taynancid">
              <i
                class="fab fa-github"
                style={{ padding: "5px", fontSize: "30px" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/taynan-siqueira-611596144/">
              <i
                class="fab fa-linkedin"
                style={{ padding: "5px", fontSize: "30px" }}
              />
            </a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
