async function getTagList(req, res) {
  const tags = await TagService.getTagList();

  if (tags) {
    res.status(200).json(tags);
  } else {
    res.status(404).json({
      message: '无标签',
    });
  }
}

module.exports = getTagList;
