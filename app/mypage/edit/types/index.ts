export type UserInfo = {
  ageInfo: {
    value: string;
    description: string;
  };
  hashTagInfo: {
    value: string;
    description: string;
    isSelected: boolean;
  }[];
  imageUrl: string;
  userId: number;
  userNickname: string;
};

export type UserInfoResponse = {
  data: UserInfo;
};

export type UserInfoUpdateData = {
  nickname: string;
  age: string;
  imageAction: string;
  hashtags: string[];
};

export type UserInfoUpdateRequest = {
  data: UserInfoUpdateData;
  imageFile?: File;
};
