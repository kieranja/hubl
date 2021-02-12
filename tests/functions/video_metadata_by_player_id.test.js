
import { renderString } from '../../src/index';
describe(`Returns the metadata of a video by player id. Only works for videos files that allow embedding, sharing, and tracking.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ video_metadata_by_player_id({ id: 123 }) }}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{{ video_metadata_by_player_id({ id: 123, domain: "video.mydomain.com"  }) }}`);
      
  });
});