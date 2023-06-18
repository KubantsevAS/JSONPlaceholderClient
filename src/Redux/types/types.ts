export interface IPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface IGeo {
  lat: number;
  lng: number;
}

interface IUserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

interface IUserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUserInfo {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IUserAddress;
  phone: string;
  website: string;
  company: IUserCompany;
}
