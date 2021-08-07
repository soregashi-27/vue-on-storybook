import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
  // viewport: {
  //   viewports: {
  //     kindleFire2: {
  //       name: 'Kindle Fire 2',
  //       styles: {
  //         width: '600px',
  //         height: '963px'
  //       }
  //     },
  //     kindleFireHD: {
  //       name: 'Kindle Fire HD',
  //       styles: {
  //         width: '533px',
  //         height: '801px'
  //       }
  //     }
  //   }
  // }
}
// 端末別で大きさを確認したいとき限定のファイル
