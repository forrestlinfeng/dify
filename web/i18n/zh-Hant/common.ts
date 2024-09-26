const translation = {
  api: {
    success: '成功',
    actionSuccess: '操作成功',
    saved: '已儲存',
    create: '已建立',
    remove: '已移除',
  },
  operation: {
    create: '建立',
    confirm: '確認',
    cancel: '取消',
    clear: '清空',
    save: '儲存',
    saveAndEnable: '儲存並啟用',
    edit: '編輯',
    add: '新增',
    added: '已新增',
    refresh: '重新開始',
    reset: '重置',
    search: '搜尋',
    change: '更改',
    remove: '移除',
    send: '傳送',
    copy: '複製',
    lineBreak: '換行',
    sure: '我確定',
    download: '下載',
    delete: '刪除',
    settings: '設定',
    setup: '設定',
    getForFree: '免費獲取',
    reload: '重新整理',
    ok: '好的',
    log: '日誌',
    learnMore: '瞭解更多',
    params: '引數設定',
    duplicate: '複製',
    rename: '重新命名',
    audioSourceUnavailable: '音訊來源不可用',
  },
  placeholder: {
    input: '請輸入',
    select: '請選擇',
  },
  voice: {
    language: {
      zhHans: '中文',
      zhHant: '繁體中文',
      enUS: '英語',
      deDE: '德語',
      frFR: '法語',
      esES: '西班牙語',
      itIT: '義大利語',
      thTH: '泰語',
      idID: '印尼語',
      jaJP: '日語',
      koKR: '韓語',
      ptBR: '葡萄牙語',
      ruRU: '俄語',
      ukUA: '烏克蘭語',
      viVN: '越南語',
      plPL: '波蘭語',
      roRO: '羅馬尼亞語',
      hiIN: '印地語',
      trTR: '土耳其語',
      faIR: '波斯語',
    },
  },
  unit: {
    char: '個字元',
  },
  actionMsg: {
    noModification: '暫無修改',
    modifiedSuccessfully: '修改成功',
    modifiedUnsuccessfully: '修改失敗',
    copySuccessfully: '複製成功',
    generatedSuccessfully: '已重新生成',
    generatedUnsuccessfully: '生成失敗',
    paySucceeded: '已支付成功',
    payCancelled: '已取消支付',
  },
  model: {
    params: {
      temperature: '隨機性 temperature',
      temperatureTip:
        '控制回覆的隨機性。\n值越大，回覆越隨機。\n值越小，回覆越確定或一致。',
      top_p: '核取樣 top_p',
      top_pTip:
        '控制生成多樣性。\n值越大，輸出會包括更多的單詞選項。\n值越小，模型會更集中在高機率的單詞上，輸出更確定但可能缺乏多樣性。\n核取樣和隨機性不建議同時修改。',
      presence_penalty: '話題新鮮度 presence_penalty',
      presence_penaltyTip:
        '控制生成時對上文已存在的話題的偏好程度。\n值越大，越可能使用到新的話題。',
      frequency_penalty: '頻率懲罰度 frequency_penalty',
      frequency_penaltyTip:
        '影響常見與罕見詞彙使用。\n值較大時，傾向於生成不常見的詞彙和表達方式。\n值越小，更傾向於使用常見和普遍接受的詞彙或短語。',
      max_tokens: '單次回覆限制 max_tokens',
      max_tokensTip:
        '用於限制回覆的最大長度，以 token 為單位。\n較大的值可能會限制給提示詞、聊天記錄和知識庫留出的空間。\n建議將其設定在三分之二以下。\ngpt-4-1106-preview、gpt-4-vision-preview 最大長度 (輸入128k，輸出4k)',
      maxTokenSettingTip: '您設定的最大 tokens 數較大，可能會導致 prompt、使用者問題、知識庫內容沒有 token 空間進行處理，建議設定到 2/3 以下。',
      setToCurrentModelMaxTokenTip: '最大令牌數更新為當前模型最大的令牌數 {{maxToken}} 的 80%。',
      stop_sequences: '停止序列 stop_sequences',
      stop_sequencesTip: '最多四個序列，API 將停止生成更多的 token。返回的文字將不包含停止序列。',
      stop_sequencesPlaceholder: '輸入序列並按 Tab 鍵',
    },
    tone: {
      Creative: '創意',
      Balanced: '平衡',
      Precise: '精確',
      Custom: '自定義',
    },
    addMoreModel: '新增更多模型',
  },
  menus: {
    status: 'beta',
    explore: '探索',
    apps: '工作室',
    plugins: '外掛',
    pluginsTips: '整合第三方外掛或建立與 ChatGPT 相容的 AI 外掛。',
    datasets: '知識庫',
    datasetsTips: '即將到來: 上傳自己的長文字資料，或透過 Webhook 整合自己的資料來源',
    newApp: '建立應用',
    newDataset: '建立知識庫',
    tools: '工具',
  },
  userProfile: {
    settings: '設定',
    emailSupport: '電子郵件支援',
    workspace: '工作空間',
    createWorkspace: '建立工作空間',
    helpCenter: '幫助文件',
    communityFeedback: '使用者反饋',
    roadmap: '路線圖',
    community: '社群',
    about: '關於',
    logout: '登出',
  },
  settings: {
    accountGroup: '賬戶',
    workplaceGroup: '工作空間',
    account: '我的賬戶',
    members: '成員',
    billing: '賬單',
    integrations: '整合',
    language: '語言',
    provider: '模型供應商',
    dataSource: '資料來源',
    plugin: '外掛',
    apiBasedExtension: 'API 擴充套件',
  },
  account: {
    avatar: '頭像',
    name: '使用者名稱',
    email: '郵箱',
    password: '密碼',
    passwordTip: '如果您不想使用驗證碼登入，可以設定永久密碼',
    setPassword: '設定密碼',
    resetPassword: '重置密碼',
    currentPassword: '原密碼',
    newPassword: '新密碼',
    notEqual: '兩個密碼不相同',
    confirmPassword: '確認密碼',
    langGeniusAccount: 'Dify 賬號',
    langGeniusAccountTip: '您的 Dify 賬號和相關的使用者資料。',
    editName: '編輯名字',
    showAppLength: '顯示 {{length}} 個應用',
    delete: '刪除帳戶',
    deleteTip: '刪除您的帳戶將永久刪除您的所有資料並且無法恢復。',
    deleteConfirmTip: '請將以下內容從您的註冊電子郵件發送至 ',
  },
  members: {
    team: '團隊',
    invite: '新增',
    name: '姓名',
    lastActive: '上次活動時間',
    role: '角色',
    pending: '待定...',
    owner: '所有者',
    admin: '管理員',
    adminTip: '能夠建立應用程式和管理團隊設定',
    normal: '成員',
    normalTip: '只能使用應用程式，不能建立應用程式',
    editor: '編輯',
    editorTip: '能夠建立並編輯應用程式，不能管理團隊設定',
    inviteTeamMember: '新增團隊成員',
    inviteTeamMemberTip: '對方在登入後可以訪問你的團隊資料。',
    email: '郵箱',
    emailInvalid: '郵箱格式無效',
    emailPlaceholder: '輸入郵箱',
    sendInvite: '傳送邀請',
    invitedAsRole: '邀請為{{role}}使用者',
    invitationSent: '邀請已傳送',
    invitationSentTip: '邀請已傳送，對方登入 Dify 後即可訪問你的團隊資料。',
    invitationLink: '邀請連結',
    failedInvitationEmails: '邀請以下郵箱失敗',
    ok: '好的',
    removeFromTeam: '移出團隊',
    removeFromTeamTip: '將取消團隊訪問',
    setAdmin: '設為管理員',
    setMember: '設為普通成員',
    setEditor: '設為編輯',
    disInvite: '取消邀請',
    deleteMember: '刪除成員',
    you: '（你）',
    setBuilder: 'Set as builder （設置為建構器）',
    datasetOperator: '知識管理員',
    builder: '建築工人',
    builderTip: '可以構建和編輯自己的應用程式',
    datasetOperatorTip: '只能管理知識庫',
  },
  integrations: {
    connected: '登入方式',
    google: 'Google',
    googleAccount: 'Google 賬號登入',
    github: 'GitHub',
    githubAccount: 'GitHub 賬號登入',
    connect: '繫結',
  },
  language: {
    displayLanguage: '介面語言',
    timezone: '時區',
  },
  provider: {
    apiKey: 'API 金鑰',
    enterYourKey: '輸入你的 API 金鑰',
    invalidKey: '無效的 OpenAI API 金鑰',
    validatedError: '校驗失敗：',
    validating: '驗證金鑰中...',
    saveFailed: 'API 金鑰儲存失敗',
    apiKeyExceedBill: '此 API KEY 已沒有可用配額，請閱讀',
    addKey: '新增 金鑰',
    comingSoon: '即將推出',
    editKey: '編輯',
    invalidApiKey: '無效的 API 金鑰',
    azure: {
      apiBase: 'API Base',
      apiBasePlaceholder: '輸入您的 Azure OpenAI API Base 地址',
      apiKey: 'API Key',
      apiKeyPlaceholder: '輸入你的 API 金鑰',
      helpTip: '瞭解 Azure OpenAI Service',
    },
    openaiHosted: {
      openaiHosted: '託管 OpenAI',
      onTrial: '體驗',
      exhausted: '超出限額',
      desc: '託管 OpenAI 由 Dify 提供的託管 OpenAI 服務，你可以使用 GPT-3.5 等模型，在體驗額度消耗完畢前你需要設定其它模型供應商。',
      callTimes: '呼叫次數',
      usedUp: '試用額度已用完，請在下方新增自己的模型供應商',
      useYourModel: '當前正在使用你自己的模型供應商。',
      close: '關閉',
    },
    anthropicHosted: {
      anthropicHosted: 'Anthropic Claude',
      onTrial: '體驗',
      exhausted: '超出限額',
      desc: '功能強大的模型，擅長執行從複雜對話和創意內容生成到詳細指導的各種任務。',
      callTimes: '呼叫次數',
      usedUp: '試用額度已用完，請在下方新增自己的模型供應商',
      useYourModel: '當前正在使用你自己的模型供應商。',
      close: '關閉',
    },
    anthropic: {
      using: '嵌入能力正在使用',
      enableTip: '要啟用 Anthropic 模型，您需要先繫結 OpenAI 或 Azure OpenAI 服務。',
      notEnabled: '未啟用',
      keyFrom: '從 Anthropic 獲取您的 API 金鑰',
    },
    encrypted: {
      front: '金鑰將使用 ',
      back: ' 技術進行加密和儲存。',
    },
  },
  modelProvider: {
    notConfigured: '系統模型尚未完全配置，部分功能可能無法使用。',
    systemModelSettings: '系統模型設定',
    systemModelSettingsLink: '為什麼需要設定系統模型？',
    selectModel: '選擇您的模型',
    setupModelFirst: '請先設定您的模型',
    systemReasoningModel: {
      key: '系統推理模型',
      tip: '設定建立應用使用的預設推理模型，以及對話名稱生成、下一步問題建議等功能也會使用該預設推理模型。',
    },
    embeddingModel: {
      key: 'Embedding 模型',
      tip: '設定知識庫文件嵌入處理的預設模型，檢索和匯入知識庫均使用該Embedding模型進行向量化處理，切換後將導致已匯入的知識庫與問題之間的向量維度不一致，從而導致檢索失敗。為避免檢索失敗，請勿隨意切換該模型。',
      required: '請選擇 Embedding 模型',
    },
    speechToTextModel: {
      key: '語音轉文字模型',
      tip: '設定對話中語音轉文字輸入的預設使用模型。',
    },
    ttsModel: {
      key: '文字轉語音模型',
      tip: '設定對話中文字轉語音輸出的預設使用模型。',
    },
    rerankModel: {
      key: 'Rerank 模型',
      tip: '重排序模型將根據候選文件列表與使用者問題語義匹配度進行重新排序，從而改進語義排序的結果',
    },
    quota: '額度',
    searchModel: '搜尋模型',
    noModelFound: '找不到模型 {{model}}',
    models: '模型列表',
    showMoreModelProvider: '顯示更多模型提供商',
    selector: {
      tip: '該模型已被刪除。請添模型或選擇其他模型。',
      emptyTip: '無可用模型',
      emptySetting: '請前往設定進行配置',
      rerankTip: '請設定 Rerank 模型',
    },
    card: {
      quota: '額度',
      onTrial: '試用中',
      paid: '已購買',
      quotaExhausted: '配額已用完',
      callTimes: '呼叫次數',
      tokens: 'Tokens',
      buyQuota: '購買額度',
      priorityUse: '優先使用',
      removeKey: '刪除 API 金鑰',
      tip: '已付費額度將優先考慮。 試用額度將在付費額度用完後使用。',
    },
    item: {
      deleteDesc: '{{modelName}} 被用作系統推理模型。刪除後部分功能將無法使用。請確認。',
      freeQuota: '免費額度',
    },
    addApiKey: '新增您的 API 金鑰',
    invalidApiKey: 'Invalid API key',
    encrypted: {
      front: '您的金鑰將使用',
      back: '技術進行加密和儲存。',
    },
    freeQuota: {
      howToEarn: '如何獲取',
    },
    addMoreModelProvider: '新增更多模型提供商',
    addModel: '新增模型',
    modelsNum: '{{num}} 個模型',
    showModels: '顯示模型',
    showModelsNum: '顯示 {{num}} 個模型',
    collapse: '收起',
    config: '配置',
    modelAndParameters: '模型及引數',
    model: '模型',
    featureSupported: '支援 {{feature}} 功能',
    callTimes: '呼叫次數',
    credits: '訊息額度',
    buyQuota: '購買額度',
    getFreeTokens: '獲得免費 Tokens',
    priorityUsing: '優先使用',
    deprecated: '已棄用',
    confirmDelete: '確認刪除?',
    quotaTip: '剩餘免費額度',
    loadPresets: '載入預設',
    parameters: '引數',
    loadBalancingHeadline: '負載均衡',
    apiKeyStatusNormal: 'APIKey 狀態正常',
    defaultConfig: '默認配置',
    configLoadBalancing: '配置負載均衡',
    loadBalancingDescription: '使用多組憑證減輕壓力。',
    addConfig: '添加配置',
    upgradeForLoadBalancing: '升級您的計劃以啟用Load Balancing。',
    apiKey: 'API 金鑰',
    loadBalancing: '負載均衡',
    providerManagedDescription: '使用模型提供程式提供的單組憑證。',
    modelHasBeenDeprecated: '此模型已棄用',
    apiKeyRateLimit: '已達到速率限制，在 {{seconds}} 秒後可用',
    providerManaged: '提供者管理',
    editConfig: '編輯配置',
    loadBalancingInfo: '默認情況下，負載均衡使用 Round-robin 策略。如果觸發了速率限制，將應用 1 分鐘的冷卻時間。',
    loadBalancingLeastKeyWarning: '要啟用負載均衡，必須至少啟用 2 個金鑰。',
  },
  dataSource: {
    add: '新增資料來源',
    connect: '繫結',
    notion: {
      title: 'Notion',
      description: '使用 Notion 作為知識庫的資料來源。',
      connectedWorkspace: '已繫結工作空間',
      addWorkspace: '新增工作空間',
      connected: '已繫結',
      disconnected: '未繫結',
      changeAuthorizedPages: '更改授權頁面',
      pagesAuthorized: '已授權頁面',
      sync: '同步',
      remove: '刪除',
      selector: {
        pageSelected: '已選頁面',
        searchPages: '搜尋頁面...',
        noSearchResult: '無搜尋結果',
        addPages: '新增頁面',
        preview: '預覽',
      },
    },
    website: {
      active: '積極',
      title: '網站',
      with: '跟',
      inactive: '無效',
      configuredCrawlers: '配置的爬網程式',
      description: '使用 Web 爬蟲從網站導入內容。',
    },
    configure: '配置',
  },
  plugin: {
    serpapi: {
      apiKey: 'API Key',
      apiKeyPlaceholder: '輸入你的 API 金鑰',
      keyFrom: '從 SerpAPI 帳戶頁面獲取您的 SerpAPI 金鑰',
    },
  },
  apiBasedExtension: {
    title: 'API 擴充套件提供了一個集中式的 API 管理，在此統一新增 API 配置後，方便在 Dify 上的各類應用中直接使用。',
    link: '瞭解如何開發您自己的 API 擴充套件。',
    linkUrl: 'https://docs.dify.ai/v/zh-hans/guides/extension/api-based-extension',
    add: '新增 API 擴充套件',
    selector: {
      title: 'API 擴充套件',
      placeholder: '請選擇 API 擴充套件',
      manage: '管理 API 擴充套件',
    },
    modal: {
      title: '新增 API 擴充套件',
      editTitle: '編輯 API 擴充套件',
      name: {
        title: '名稱',
        placeholder: '請輸入名稱',
      },
      apiEndpoint: {
        title: 'API Endpoint',
        placeholder: '請輸入 API endpoint',
      },
      apiKey: {
        title: 'API-key',
        placeholder: '請輸入 API-key',
        lengthError: 'API-key 不能少於 5 位',
      },
    },
    type: '型別',
  },
  about: {
    changeLog: '更新日誌',
    updateNow: '現在更新',
    nowAvailable: 'Dify {{version}} 現已可用。',
    latestAvailable: 'Dify {{version}} 已是最新版本。',
  },
  appMenus: {
    overview: '監控',
    promptEng: '編排',
    apiAccess: '訪問 API',
    logAndAnn: '日誌與標註',
    logs: '日誌',
  },
  environment: {
    testing: '測試環境',
    development: '開發環境',
  },
  appModes: {
    completionApp: '文字生成型應用',
    chatApp: '對話型應用',
  },
  datasetMenus: {
    documents: '文件',
    hitTesting: '召回測試',
    settings: '設定',
    emptyTip: ' 知識庫尚未關聯，請前往應用程式或外掛完成關聯。',
    viewDoc: '檢視文件',
    relatedApp: '個關聯應用',
  },
  voiceInput: {
    speaking: '現在講...',
    converting: '正在轉換為文字...',
    notAllow: '麥克風未授權',
  },
  modelName: {
    'gpt-3.5-turbo': 'GPT-3.5-Turbo',
    'gpt-3.5-turbo-16k': 'GPT-3.5-Turbo-16K',
    'gpt-4': 'GPT-4',
    'gpt-4-32k': 'GPT-4-32K',
    'text-davinci-003': 'Text-Davinci-003',
    'text-embedding-ada-002': 'Text-Embedding-Ada-002',
    'whisper-1': 'Whisper-1',
    'claude-instant-1': 'Claude-Instant',
    'claude-2': 'Claude-2',
  },
  chat: {
    renameConversation: '重新命名會話',
    conversationName: '會話名稱',
    conversationNamePlaceholder: '請輸入會話名稱',
    conversationNameCanNotEmpty: '會話名稱必填',
    citation: {
      title: '引用',
      linkToDataset: '跳轉至知識庫',
      characters: '字元：',
      hitCount: '召回次數：',
      vectorHash: '向量雜湊：',
      hitScore: '召回得分：',
    },
  },
  promptEditor: {
    placeholder: '在這裡寫你的提示詞，輸入\'{\' 插入變數、輸入\'/\' 插入提示內容塊',
    context: {
      item: {
        title: '上下文',
        desc: '插入上下文模板',
      },
      modal: {
        title: '有 {{num}} 個知識庫在上下文中',
        add: '新增上下文',
        footer: '您可以在下面的“上下文”部分中管理上下文。',
      },
    },
    history: {
      item: {
        title: '會話歷史',
        desc: '插入歷史訊息模板',
      },
      modal: {
        title: '示例',
        user: '你好',
        assistant: '你好！今天我能為您提供什麼幫助？',
        edit: '編輯對話角色名稱',
      },
    },
    variable: {
      item: {
        title: '變數 & 外部工具',
        desc: '插入變數和外部工具',
      },
      outputToolDisabledItem: {
        title: '變數',
        desc: '插入變數',
      },
      modal: {
        add: '新增新變數',
        addTool: '新增工具',
      },
    },
    query: {
      item: {
        title: '查詢內容',
        desc: '插入使用者查詢模板',
      },
    },
    existed: 'Prompt 中已存在',
  },
  imageUploader: {
    uploadFromComputer: '從本地上傳',
    uploadFromComputerReadError: '圖片讀取失敗，請重新選擇。',
    uploadFromComputerUploadError: '圖片上傳失敗，請重新上傳。',
    uploadFromComputerLimit: '上傳圖片不能超過 {{size}} MB',
    pasteImageLink: '貼上圖片連結',
    pasteImageLinkInputPlaceholder: '將影象連結貼上到此處',
    pasteImageLinkInvalid: '圖片連結無效',
    imageUpload: '圖片上傳',
  },
  tag: {
    placeholder: '全部標籤',
    addNew: '建立新標籤',
    noTag: '沒有標籤',
    noTagYet: '還沒有標籤',
    addTag: '新增標籤',
    editTag: '修改標籤',
    manageTags: '管理標籤',
    selectorPlaceholder: '搜尋或者建立',
    create: '建立',
    delete: '刪除標籤',
    deleteTip: '標籤正在使用中，是否刪除？',
    created: '標籤建立成功',
    failed: '標籤建立失敗',
  },
  errorMsg: {
    fieldRequired: '{{field}} 為必填項',
    urlError: 'URL應以 http:// 或 https:// 開頭',
  },
}

export default translation
