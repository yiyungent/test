(() => {
  const btn = [...document.querySelectorAll('button.vui_pagenation--btn-num')]
    .find(b => b.textContent.trim() === '2');
  
  if (btn) {
    btn.click();
    console.log('✅ 已点击页码 2');
    return true;
  }
  
  console.log('❌ 未找到页码 2 按钮');
  return false;
})();
