/** 校验规则项 */
export interface RuleItem {
    required?: boolean
    message?: string
    trigger?: 'blur' | 'change'
    pattern?: string | RegExp
    min?: number
    max?: number
}

/** 布局配置 */
export interface LayoutConfig {
    width?: string
}

/** 组件节点 ── 核心数据结构，表单内每一个字段/容器都长这样 */
export interface ComponentNode {
    id: string
    /** 组件类型，如 'input'、'select'、'row' */
    type: string
    /** 显示的标签 */
    label?: string
    /** 数据字段名，对应 formData 的 key */
    field?: string
    /** 组件特有属性，直接 v-bind 到组件 */
    props?: Record<string, any>
    /** 校验规则 */
    rules?: RuleItem[]
    /** 布局信息 */
    layout?: LayoutConfig
    /** 子节点（用于布局容器如 row/col） */
    children?: ComponentNode[]
}

/** 表单全局配置 */
export interface FormConfig {
    labelWidth?: number | string
    labelAlign?: 'left' | 'right' | 'top'
    size?: 'large' | 'default' | 'small'
}

/** 完整表单 Schema */
export interface FormSchema {
    /** 协议版本号，用于向后兼容迁移 */
    version: string
    /** 表单全局配置 */
    form: FormConfig
    /** 根容器（组件树起点） */
    container: ComponentNode
}