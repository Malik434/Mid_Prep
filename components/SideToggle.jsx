import React, { useState } from 'react';
import { I18nManager, Button, View } from 'react-native';
import i18n from 'i18n-js';

// Define translations
i18n.translations = {
  en: { welcome: 'Welcome' },
  ur: { welcome: 'خوش آمدید' },
};

export default function RTLToggle() {
  const [isRTL, setIsRTL] = useState(I18nManager.isRTL);

  const toggleRTL = () => {
    setIsRTL(!isRTL);
    I18nManager.forceRTL(!isRTL);
    i18n.locale = !isRTL ? 'ur' : 'en';
  };

  return (
    <View>
      <Button onPress={toggleRTL} title={isRTL ? 'Switch to LTR' : 'Switch to RTL'} />
      <Text>{i18n.t('welcome')}</Text>
    </View>
  );
}