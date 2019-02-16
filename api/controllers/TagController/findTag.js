async function findTag(req, res) {
  const name = req.param('tagName');

  if (!name) {
    res.status(404).json({
      message: '未指定标签名',
    });
  }

  const tag = await TagService.findTag(name);

  if (tag) {
    res.status(200).json(tag);
  } else {
    res.status(404).json({
      message: '未找到该标签',
    });
  }
}

module.exports = findTag;
