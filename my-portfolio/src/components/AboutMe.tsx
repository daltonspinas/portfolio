import { AboutMeInfo } from "../common/globalInfo";

function AboutMe() {
  return (
    <div className="flex flex-col gap-4 text-muted leading-7">
      {AboutMeInfo.map(x => (
        <p>{x}</p>
      ))}
    </div>
  );
}

export default AboutMe;
