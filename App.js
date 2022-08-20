/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useRef, useState} from 'react';
import type {Node} from 'react';
import {
  PixelRatio,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  findNodeHandle,
  UIManager,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import WebView from 'react-native-webview';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const response = {
  msg: 'success',
  code: 0,
  data: {
    invitation: {
      invitation_id: 410,
      title:
        '[TEST FOOD] THAM GIA BST “SIÊU SALE ĐỒNG GIÁ 9K”, THẢ GA LÊN ĐƠN CÙNG SHOPEEFOOD',
      create_time: 1660725927,
      // 加载线上数据
      message: `
        <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
     <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
    <title>Document</title>
  </head>
  <body>
      <img
        src="https://media.foody.vn/blogscontents/foody-upload-api-foody-admin-01--bf6ff350-220816154735.jpg"
        alt="undefined"
        style="float: none; height: auto; width: 100%"
      />
      <p></p>
      <img
        src="https://media.foody.vn/blogscontents/foody-upload-api-foody-admin-2-6-ab62f53d-220816154758.jpg"
        alt="undefined"
        style="float: none; height: auto; width: 100%"
      />
      <p></p>
      <img
        src="https://media.foody.vn/blogscontents/foody-upload-api-foody-admin-3-6-ddaac98c-220816154832.jpg"
        alt="undefined"
        style="float: none; height: auto; width: 100%"
      />
      <p></p>
      <img
        src="https://media.foody.vn/blogscontents/foody-upload-api-foody-admin-4-6-c896d675-220816154811.jpg"
        alt="undefined"
        style="float: none; height: auto; width: 100%"
      />
      <p style="text-align: center">
        <a
          href="https://merchant.shopeefood.vn/edu/article/bo-suu-tap-chi-8k-dat-lien-nha"
          target="_self"
          ><span
            style="
              color: rgb(0, 0, 255);
              background-color: transparent;
              font-size: 16px;
              font-family: Arial;
            "
            ><strong
              ><ins>THAM KHẢO THÔNG TIN CHƯƠNG TRÌNH TẠI </ins></strong
            ></span
          ></a
        >
      </p>
      <p style="text-align: center">
        <a
          href="https://merchant.shopeefood.vn/edu/article/bo-suu-tap-chi-8k-dat-lien-nha"
          target="_self"
          ><span
            style="
              color: rgb(0, 0, 255);
              background-color: transparent;
              font-size: 16px;
              font-family: Arial;
            "
            ><strong><ins>HỌC VIỆN SHOPEEFOOD UNI</ins></strong></span
          ></a
        ><span style="font-size: 16px; font-family: Arial"
          ><strong> </strong
        ></span>
      </p>
      <p style="text-align: center">
        <span
          style="
            color: rgb(32, 35, 37);
            background-color: transparent;
            font-size: 16px;
            font-family: Arial;
          "
          >Tham gia ngay nhóm </span
        ><a
          href="https://www.facebook.com/groups/congdongdoitacnowfood"
          target="_self"
          ><span
            style="
              color: rgb(0, 0, 255);
              background-color: transparent;
              font-size: 16px;
              font-family: Arial;
            "
            ><strong>CỘNG ĐỒNG ĐỐI TÁC NHÀ HÀNG SHOPEEFOOD</strong></span
          ><span style="font-size: 16px; font-family: Arial"
            ><strong> </strong></span
        ></a>
      </p>
      <p style="text-align: center">
        <span
          style="
            color: rgb(32, 35, 37);
            background-color: transparent;
            font-size: 16px;
            font-family: Arial;
          "
          >để được hỗ trợ thông tin nhanh chóng</span
        ><span
          style="
            color: rgb(255, 0, 0);
            background-color: transparent;
            font-size: 16px;
            font-family: Arial;
          "
          >.</span
        ><span style="font-size: 16px; font-family: Arial"> </span>
      </p>
      <img
        src="https://media.foody.vn/blogscontents/foody-upload-api-foody-admin-art-bedac525-220816154842.jpg"
        alt="undefined"
        style="float: none; height: auto; width: 100%"
      />
      <div style="background-color: blue">1</div>
  </body>
</html>
`,
      // 单独加载800k+
      // message:
      //   '<img src="https://media.foody.vn/blogscontents/foody-upload-api-foody-admin-01--bf6ff350-220816154735.jpg" alt="undefined" style="float:none;height: auto;width: 100%"/><img src="https://media.foody.vn/blogscontents/foody-upload-api-foody-admin-01--bf6ff350-220816154735.jpg" alt="undefined" style="float:none;height: auto;width: 100%"/><img src="https://media.foody.vn/blogscontents/foody-upload-api-foody-admin-01--bf6ff350-220816154735.jpg" alt="undefined" style="float:none;height: auto;width: 100%"/><img src="https://media.foody.vn/blogscontents/foody-upload-api-foody-admin-01--bf6ff350-220816154735.jpg" alt="undefined" style="float:none;height: auto;width: 100%"/>\n<p></p>\n<img src="https://media.foody.vn/blogscontents/foody-upload-api-foody-admin-01--bf6ff350-220816154735.jpg" alt="undefined" style="float:none;height: auto;width: 100%"/>',
      // 单独加载200k+
      // message: '<img style="width: 100%" src="https://media.foody.vn/blogscontents/foody-upload-api-foody-admin-01--bf6ff350-220816154735.jpg"><p></p><img style="width: 100%" src="https://media.foody.vn/blogscontents/foody-upload-api-foody-admin-01--bf6ff350-220816154735.jpg"><p></p><img style="width: 100%" src="https://media.foody.vn/blogscontents/foody-upload-api-foody-admin-01--bf6ff350-220816154735.jpg">',
      price_slash_invitation: {
        status: 1,
        is_apply_topping: false,
        dates: [1662310800],
        is_all_item: false,
        is_required_popular: false,
        min_merchant_pay: 100,
        cut_off_time: 1661273999,
        discount_type: 2,
        min_selected_item: 1,
        min_item_price: 15000,
        date_ranges: [
          {
            start_time: 1662310800,
            is_required_merchant_join: true,
            start_date: 1662310800,
            end_date: 1662742799,
            end_time: 1662656400,
          },
        ],
        discount_value: 9000,
        name: '[TEST FOOD] THAM GIA BST “SIÊU SALE ĐỒNG GIÁ 9K”, THẢ GA LÊN ĐƠN CÙNG SHOPEEFOOD',
      },
    },
  },
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [webviewHeight, setWebviewHeight] = useState(0);

  const webViewRef = useRef(null);

  const onProductDetailsWebViewMessage = event => {
    console.log('height:', event.nativeEvent.data);
    const {webviewWidth, scrollHeight} = JSON.parse(event.nativeEvent.data);
    const deviceWidth = Dimensions.get('window').width;
    console.log('deviceWidth', deviceWidth);
    console.log('webviewWidth', webviewWidth);
    console.log('scrollHeight', scrollHeight);
    console.log(webViewRef.current);
    // setWebviewHeight(scrollHeight / 2);
    setWebviewHeight(scrollHeight);
  };

  const onShouldStartLoadWithRequest = e => {
    console.log(e);
    return true;
  };

  const onWebViewLoaded = () => {
    webViewRef.current.injectJavaScript(
      `
      window.ReactNativeWebView.postMessage(JSON.stringify({webviewWidth: document.body.clientWidth, scrollHeight: document.body.scrollHeight}));
      document.body.style.margin = 0;
      // document.body.style.backgroundColor="red";
      // document.querySelector("html").style.fontSize="12px";
      `,
    );
  };

  const [message, setMessage] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setMessage(response.data.invitation.message);
    }, 500);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{flexGrow: 1}}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={{padding: 12}}>
            <Text>RN content: {webviewHeight}</Text>
            {message && (
              <WebView
                ref={webViewRef}
                onLoadEnd={onWebViewLoaded}
                automaticallyAdjustContentInsets={false}
                automaticallyAdjustsScrollIndicatorInsets={false}
                originWhitelist={['*']}
                onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
                style={{height: webviewHeight, width: '100%'}}
                onMessage={onProductDetailsWebViewMessage}
                scalesPageToFit={false}
                javaScriptEnabled={true}
                source={{html: message}}
                scrollEnabled={false}
              />
            )}
            <Text>RN content: 123123</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
