import Image from 'next/image'

interface Props {
  data: {
    username: string
    time: string
    avatarUrl: string
    likedCount: string
    content: string
  }
}

/**
 * 热门评论
 */
function Comment({
  data: { username, time, avatarUrl, likedCount, content },
}: Props) {
  if (+likedCount > 9999) {
    likedCount = (+likedCount / 10000).toFixed(1) + '万'
  }
  return (
    <>
      <div className="comment_item">
        <div className="cmt_img">
          <img src={avatarUrl} alt="avatar" />
        </div>
        <div className="cmt_wrap">
          <div className="cmt_header">
            <div className="cmt_info">
              <span className="cmt_username">{username}</span>
              <span className="cmt_time">{time}</span>
            </div>
            <div className="cmt_like">
              <span>{likedCount}</span>
              <i>
                <Image
                  src="/like.svg"
                  width={'14px'}
                  height={'14px'}
                  alt="点赞"
                />
              </i>
            </div>
          </div>
          <div className="cmt_content">
            <span>{content}</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .comment_item {
            position: relative;
            padding-top: 10px;
            width: 100%;
            display: flex;
          }

          .cmt_img {
            height: 35px;
            margin: 0 10px;
          }

          .cmt_img img {
            display: block;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            border: none;
          }

          .cmt_wrap {
            position: relative;
            padding-right: 10px;
            padding-bottom: 11px;
            flex: 1;
          }

          .cmt_header {
            display: flex;
          }

          .cmt_info {
            flex: 1;
            display: flex;
            flex-direction: column;
          }

          .cmt_username {
            font-size: 14px;
            color: hsla(0, 0%, 100%, 0.7);
            line-height: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .cmt_time {
            font-size: 9px;
            color: hsla(0, 0%, 100%, 0.3);
          }

          .cmt_like {
            display: inline-block;
            min-width: 30px;
            padding-left: 5px;
            width: 65px;
            height: 22px;
            line-height: 22px;
            font-size: 11px;
            color: #999;
            flex: none;
            text-align: right;
          }

          .cmt_like i {
            display: inline-block;
            width: 14px;
            height: 18px;
            margin-left: 6px;
            line-height: 0;
            vertical-align: middle;
            cursor: pointer;
          }

          .cmt_content {
            color: #fff;
            position: relative;
            font-size: 15px;
            line-height: 22px;
            margin-top: 5px;
          }
        `}
      </style>
    </>
  )
}

export default Comment
