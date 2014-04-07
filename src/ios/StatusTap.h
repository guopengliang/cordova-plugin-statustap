//
//  StatusTap.h
//  statustap
//
//  Created by Justin McNally on 2/11/13.
//  Modified by Guopeng Liang on 4/4/14.
//
//

#import <Cordova/CDV.h>
#import <Cordova/CDVPlugin.h>

@interface StatusTap : CDVPlugin {
  BOOL initialized;
  UIWindow *overlay;
  UIWebView *webView;
}


@property (nonatomic, retain) UITapGestureRecognizer *recognizer;


-(void) initListener:(CDVInvokedUrlCommand*)command;


@end
