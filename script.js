(function () {
  var target = document.querySelector('[data-last-updated]');
  if (!target) return;

  var lastModified = new Date(document.lastModified);
  if (Number.isNaN(lastModified.getTime())) return;

  var year = lastModified.getFullYear();
  var month = String(lastModified.getMonth() + 1).padStart(2, '0');
  var day = String(lastModified.getDate()).padStart(2, '0');
  target.dateTime = lastModified.toISOString();
  target.textContent = '最后更新：' + year + '年' + month + '月' + day + '日';
})();
