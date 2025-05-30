(() => {
  // 配置参数
  const config = {
    targetText: '2',               // 要查找的按钮文本
    className: 'vui_pagenation--btn-num', // 按钮类名
    interval: 500,                 // 检查间隔(毫秒)
    logInterval: 10                // 每多少次尝试记录一次状态
  };
  
  let attempts = 0;
  const startTime = Date.now();
  
  console.log(`🔍 开始持续搜索页码 "${config.targetText}" 按钮...`);
  
  const searchInterval = setInterval(() => {
    attempts++;
    
    // 查找目标按钮
    const buttons = document.querySelectorAll(`button.${config.className}`);
    const targetButton = Array.from(buttons).find(btn => 
      btn.textContent.trim() === config.targetText
    );
    
    if (targetButton) {
      clearInterval(searchInterval);
      targetButton.click();
      console.log(`✅ 成功点击页码 ${config.targetText} (尝试次数: ${attempts}, 耗时: ${Date.now() - startTime}ms)`);
    } 
    // 定期记录搜索状态（避免日志过多）
    else if (attempts % config.logInterval === 0) {
      console.log(`⏳ 持续搜索中... 已尝试 ${attempts} 次`);
    }
  }, config.interval);
})();
