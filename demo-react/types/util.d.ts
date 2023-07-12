
interface Pagination<T = Record<string, any>> {
  current: number
  size: number
  byCondition: T
}

interface PageListData<R> {
  records: R[]
  current: number
  total: number
}

// api请求函数类型
type ReqType = (params: any, options: any) => Promise<any>
// 获取数组的类型
type GetElementType<T extends (Array<any> | undefined)> = T extends (infer U)[] ? U : never
// 获取请求的结果类型
type GetReqReturnType<T extends ReqType> = Awaited<ReturnType<T>>
// 获取类型指定字段值
type PickField<T, U extends keyof NonNullable<T>> = Pick<NonNullable<T>, U>
// 获取请求的records字段 一般用于table页面
type GetReqListRecord<T extends ReqType> =  GetElementType<PickField<GetReqReturnType<T>, 'records'>['records']>

type GetReqListData<T extends ReqType> = GetElementType<GetReqReturnType<T>>
// 获取请求的condition参数
type GetReqCondition<T extends ReqType> = NonNullable<Parameters<T>['0']['condition']>
// 获取请求的参数
type GetReqParams<T extends ReqType> = NonNullable<Parameters<T>['0']>
type GetReqParamList<T extends ReqType> = NonNullable<Parameters<T>>

type ModalType = 'create' | 'detail' | 'update'

type Mode = 'create' | 'detail' | 'update'

type TValueType = 'enum' | 'text' | 'tags'

type UploadBtnChangeProps = { file: File; filename?: string }
type UploadBtnOnChange = (options: UploadBtnChangeProps) => void

type TableParams<Params> = Params & {current?: number; pageSize?: number}
type DownloadData = {fileName: string, blob: Blob}

type TPolicyRangePageMode = 'life' | 'money'

type TMenuItem = NonNullable<GetReqReturnType<typeof tree>>[number]