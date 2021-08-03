import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer-container">
        <div className="copy-right">
          <i class="fa fa-copyright"> </i>
          <p className="full-name"> 2021 Shanice Dennis-Russell</p>
        </div>
        <div>
          <a
            href="https://github.com/sdennruss/"
            target="_blank"
            rel="noopener noreferrer"
            className="my-github"
          >
            GitHub
          </a>
          <a
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=sdennisrussell@gmail.com&su=Hi Shan!&shva=1"
            target="_blank"
            rel="noopener noreferrer"
            className="email-me"
          >
            Email
          </a>{" "}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
