# Showcase - a practical guide on how to do a side menu app using ionic 2


## Components

### Highlight menu item

Follow the tutorial [here](https://youtu.be/zHlI_j7Veyg).

### Prevent white screen after splash screen

Add the following line to your `config.xml` file:

```xml
<preference name="AutoHideSplashScreen" value="false" />
```

### Image viewer

Follow the link [here](https://github.com/Riron/ionic-img-viewer).

Basically, run the following command:

```sh
$ npm install --save ionic-img-viewer
```

Then, for ionic 2.x or up:

```typescript
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  imports: [
    IonicImageViewerModule
  ]
})
export class AppModule {}
```

To use:

```html
<img src="IMAGE_URL" imageViewer />
```

### In app browser

Follow the link in the [doc](https://ionicframework.com/docs/native/in-app-browser/).

To install:

```sh
$ ionic cordova plugin add cordova-plugin-inappbrowser
$ npm install --save @ionic-native/in-app-browser
```

To add the plugin to your app's module:

```typescript
...

import { InAppBrowser } from '@ionic-native/in-app-browser';

...

@NgModule({
  ...

  providers: [
    ...
    InAppBrowser
    ...
  ]
  ...
})
export class AppModule { }
```

To use:

```typescript
import { InAppBrowser } from '@ionic-native/in-app-browser';

export class ContactPage {

  constructor(public navCtrl: NavController,
    private iab: InAppBrowser) {
  }

  showFacebook() {
    const browser = this.iab.create("https://www.facebook.com/profile.php?id=100000519299083");
    browser.show();
  }
  
}
```


## Tricks

### Splash Screen Spinner

To control the appearnace of the splash screen spinner, add the following line to your `config.xml` file:

```xml
<preference name="ShowSplashScreenSpinner" value="false"/>
```
