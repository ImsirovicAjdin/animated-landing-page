import { BgOverlay } from "./bg-overlay";
import { PolygonShape } from "./polygonShape";
import { TextOverMainBackground } from "./txtOverMainBg";

function Main() {
  return (
    <main>
        <div className="myBg relative pt-16 pb-32 flex content-center items-center justify-center">
          <BgOverlay />
          <TextOverMainBackground />
          <PolygonShape />
        </div>
    </main>
  );
}

export { Main };
