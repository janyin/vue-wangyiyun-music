interface Props {
  hotWord: { first: string }[]
  clickWord: Function
}
/**
 * 搜索热词
 */
function Trending({ hotWord, clickWord }: Props) {
  return (
    <>
      <div className="hot_list">
        <h3>热门搜索</h3>
        <div className="list">
          {hotWord.map((value) => (
            <span
              className="hot_word"
              key={value.first}
              onClick={() => clickWord(value.first)}
            >
              <span>{value.first}</span>
            </span>
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .hot_word {
            position: relative;
            display: inline-block;
            height: 32px;
            margin-right: 8px;
            margin-bottom: 8px;
            padding: 0 14px;
            font-size: 14px;
            line-height: 32px;
            color: #333;
            border: 1px solid rgba(0, 0, 0, 0.1);
            border-radius: 30px;
            cursor: pointer;
          }
          .hot_list {
            padding: 0 10px;
          }
          .hot_list h3 {
            font-size: 12px;
            line-height: 12px;
            color: #666;
          }
          .list {
            margin: 10px 0 7px;
          }
        `}
      </style>
    </>
  )
}

export default Trending
