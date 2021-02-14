
import { renderString } from '../../src/index';
describe(`A video player`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% video_player "embed_player", player_id="1234", type="script", label="good player", width="300", height="200", play_button_color="#006643", hide_playlist=True, full_width=False %}`);
      
  });
});