const translation = {
  createApp: '建立應用',
  types: {
    all: '全部',
    chatbot: '聊天助手',
    agent: 'Agent',
    workflow: '工作流',
    completion: '文字生成',
  },
  duplicate: '複製',
  duplicateTitle: '複製應用',
  export: '匯出 DSL',
  exportFailed: '匯出 DSL 失敗',
  importDSL: '匯入 DSL 檔案',
  createFromConfigFile: '透過 DSL 檔案建立',
  deleteAppConfirmTitle: '確認刪除應用?',
  deleteAppConfirmContent:
    '刪除應用將無法撤銷。使用者將不能訪問你的應用，所有 Prompt 編排配置和日誌均將一併被刪除。',
  appDeleted: '應用已刪除',
  appDeleteFailed: '應用刪除失敗',
  join: '參與社群',
  communityIntro: '與團隊成員、貢獻者和開發者在不同頻道中交流',
  roadmap: '產品路線圖',
  newApp: {
    startFromBlank: '建立空白應用',
    startFromTemplate: '從應用模版建立',
    captionAppType: '想要哪種應用型別？',
    chatbotDescription: '使用大型語言模型構建基於聊天的助手',
    completionDescription: '構建一個根據提示生成高質量文字的應用程式，例如生成文章、摘要、翻譯等。',
    completionWarning: '該型別不久後將不再支援建立',
    agentDescription: '構建一個智慧Agent，可以自主選擇工具來完成任務',
    workflowDescription: '以工作流的形式編排生成型應用，提供更多的自定義能力。 它適合有經驗的使用者。',
    workflowWarning: '正在進行 Beta 測試',
    chatbotType: '聊天助手編排方法',
    basic: '基礎編排',
    basicTip: '新手適用，可以切換成工作流編排',
    basicFor: '新手適用',
    basicDescription: '基本編排允許使用簡單的設定編排聊天機器人應用程式，而無需修改內建提示。 它適合初學者。',
    advanced: '工作流編排',
    advancedFor: '進階使用者適用',
    advancedDescription: '工作流編排以工作流的形式編排聊天機器人，提供高度的自定義，包括編輯內建提示的能力。 它適合有經驗的使用者。',
    captionName: '圖示 & 名稱',
    appNamePlaceholder: '給你的應用起個名字',
    captionDescription: '描述',
    appDescriptionPlaceholder: '輸入應用的描述',
    useTemplate: '使用該模板',
    previewDemo: '預覽 Demo',
    chatApp: '助手',
    chatAppIntro:
      '我要構建一個聊天場景的應用。該應用採用一問一答模式與使用者持續對話。',
    agentAssistant: '新的智慧助手',
    completeApp: '文字生成應用',
    completeAppIntro:
      '我要構建一個根據提示生成高質量文字的應用，例如生成文章、摘要、翻譯等',
    showTemplates: '我想從範例模板中選擇',
    hideTemplates: '返回應用型別選擇',
    Create: '建立',
    Cancel: '取消',
    nameNotEmpty: '名稱不能為空',
    appTemplateNotSelected: '請選擇應用模版',
    appTypeRequired: '請選擇應用型別',
    appCreated: '應用已建立',
    appCreateFailed: '應用建立失敗',
  },
  editApp: '編輯資訊',
  editAppTitle: '編輯應用資訊',
  editDone: '應用資訊已更新',
  editFailed: '更新應用資訊失敗',
  iconPicker: {
    ok: '確認',
    cancel: '取消',
    emoji: '表情符號',
    image: '圖片',
  },
  switch: '遷移為工作流編排',
  switchTipStart: '將為您建立一個使用工作流編排的新應用。新應用將',
  switchTip: '不能夠',
  switchTipEnd: '遷移回基礎編排',
  switchLabel: '新應用建立為',
  removeOriginal: '刪除原應用',
  switchStart: '開始遷移',
  typeSelector: {
    all: '所有型別',
    chatbot: '聊天助手',
    agent: 'Agent',
    workflow: '工作流',
    completion: '文字生成',
  },
  tracing: {
    title: '追蹤應用程式效能',
    description: '配置第三方LLMOps提供商並追蹤應用程式效能。',
    config: '配置',
    view: '查看',
    collapse: '收起',
    expand: '展開',
    tracing: '追蹤',
    disabled: '已禁用',
    disabledTip: '請先配置提供商',
    enabled: '服務中',
    tracingDescription: '捕獲應用程式執行的完整上下文，包括LLM調用、上下文、提示、HTTP請求等，到第三方追蹤平台。',
    configProviderTitle: {
      configured: '已配置',
      notConfigured: '配置提供商以啟用追蹤',
      moreProvider: '更多提供商',
    },
    langsmith: {
      title: 'LangSmith',
      description: '一個全方位的開發者平台，用於LLM驅動的應用程式生命週期的每個步驟。',
    },
    langfuse: {
      title: 'Langfuse',
      description: '追蹤、評估、提示管理和指標，用於調試和改進您的LLM應用程式。',
    },
    inUse: '使用中',
    configProvider: {
      title: '配置 ',
      placeholder: '輸入您的{{key}}',
      project: '專案',
      publicKey: '公鑰',
      secretKey: '密鑰',
      viewDocsLink: '查看{{key}}文檔',
      removeConfirmTitle: '移除{{key}}配置？',
      removeConfirmContent: '當前配置正在使用中，移除它將關閉追蹤功能。',
    },
  },
  answerIcon: {
    descriptionInExplore: '是否使用 WebApp 圖示在 Explore 中取代 🤖',
    title: '使用 WebApp 圖示取代 🤖',
    description: '是否在共享應用程式中使用 WebApp 圖示進行取代 🤖',
  },
  importFromDSLUrl: '寄件者 URL',
  importFromDSL: '從 DSL 導入',
  importFromDSLFile: '從 DSL 檔',
  importFromDSLUrlPlaceholder: '在此處粘貼 DSL 連結',
}

export default translation
