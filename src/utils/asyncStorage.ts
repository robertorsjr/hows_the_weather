import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setStorageItem(key: string, value: string) {
  await AsyncStorage.setItem(key, value);
}

export async function getStorateItem(key: string) {
  return await AsyncStorage.getItem(key);
}

export async function deleteStorageItem(key: string) {
  await AsyncStorage.removeItem(key);
}
