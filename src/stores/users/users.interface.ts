export interface ApiLink {
  href: string;
}

export interface UserLink {
  avatar: ApiLink;
  edit: ApiLink;
  self: ApiLink;
}

export interface ApiUser {
  address: string;
  dob: string;
  email: string;
  first_name: string;
  gender: 'male' | 'female';
  id: string;
  last_name: string;
  phone: string;
  status: string;
  website: string;
  _links: UserLink;
}
