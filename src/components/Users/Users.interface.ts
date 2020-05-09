export interface UsersState {
  selectedRowKeys: string[];
}

export interface UserPagintaionConfig {
  total?: number;
  disabled?: boolean;
  current?: number;
  pageSize?: number;
  onChange?: (page: number, pageSize?: number) => void;
  hideOnSinglePage?: boolean;
  showSizeChanger?: boolean;
}
