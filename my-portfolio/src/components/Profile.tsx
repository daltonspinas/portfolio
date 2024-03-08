import { ReactComponent as GithubLogo } from "../assets/github.svg";
import { ReactComponent as LinkedInLogo } from "../assets/linked-in.svg";
import ProfilePic from "../assets/profile-pic.jpeg";
import { ProfessionalSummary } from "../common/globalInfo";

const icons = [GithubLogo, GithubLogo];

function Profile() {
  return (
    <div className=" h-1/2 md:h-screen w-full flex flex-col justify-between py-12 md:py-24 md:sticky top-0">
      <div className="md:pr-8">
        <h1 className="font-bold text-4xl md:text-6xl text-decoration-line: underline decoration-accent">
          Dalton Spinas
        </h1>
        <h2 className=" text-2xl mt-2 md:mt-8 text-decoration-line: underline decoration-accent">
          Fullstack Software Engineer
        </h2>
        <p className="text-muted mt-2 md:mt-8 leading-7">
          {ProfessionalSummary}
        </p>
        <div className="w-80 md:w-96 m-auto md:mx-0 md:mt-24">
          <img src={ProfilePic} className="profile-pic"></img>
        </div>
      </div>
      <div>
        <ul className="flex items-center justify-center md:justify-start w-full pb-4 md:pb-0 gap-4">
            <li className="mr-4 mt-4 h-12 w-12">
              <a
                href="https://github.com/daltonspinas"
                target="_blank"
                rel="noreferrer noopener"
              >
                <GithubLogo
                  xmlns={"http://www.w3.org/2000/svg"}
                  fill={"currentColor"}
                  aria-hidden={"true"}
                  viewBox={"0 0 100 100"}
                ></GithubLogo>
              </a>
            </li>
            <li className="mr-4 mt-4 h-12 w-12">
              <a
                href="https://www.linkedin.com/in/dalton-spinas/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <LinkedInLogo
                  xmlns={"http://www.w3.org/2000/svg"}
                  fill={"currentColor"}
                  aria-hidden={"true"}
                  viewBox={"0 0 50 50"}
                ></LinkedInLogo>
              </a>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
