import React from "react";
import Lesson from "./Lesson";
import ContactForm from "./ContactForm";

class Main extends React.Component {
  render() {
    const lessonList = [
      {
        name: "GitHub",
        image: "./github.jpg",
        introduction:
          "GitHubは、ソフトウェア開発のプラットフォームであり、ソースコードをホスティングする。コードのバージョン管理システムにはGitを使用する。Ruby on RailsおよびErlangで記述されており、アメリカのカリフォルニア州サンフランシスコ市に拠点を置くGitHub社によって保守されている。"
      },
      {
        name: "Qiita",
        image:
          "./qiita.png",
        introduction: "Qiitaは、Incrementsが運営するプログラミング情報のナレッジコミュニティ。2016年現在で日本最大のプログラマーコミュニティとされている。"
      },
      {
        name: "Connpass",
        image:
          "./connpass.png",
        introduction:
          "connpassはイベントやIT勉強会の開催、さらに参加者の集客に便利です。コミュニティやグループの運営やイベントの検索、事前決済もできます。"
      },
      {
        name: "Lapras",
        image:
          "./lapras.jpg",
        introduction:
          "日本初のAIヘッドハンティングサービスLAPRAS SCOUTです。LAPRAS SCOUTは、人工知能によるマッチングアルゴリズムにより企業と人材を結びつけることで、その企業にとっての逸材を探し出します。"
      }
    ];

    return (
      <div className="main-wrapper">
        <div className="main">
          <div className="copy-container">
            <h1>aocattleya</h1>
            <h2>趣味でフロントエンドを主軸にweb技術を学んでいます。</h2>
          </div>
          <div className="lesson-container">
            <h3>リンク</h3>
            {lessonList.map(lessonItem => {
              return (
                <Lesson
                  name={lessonItem.name}
                  image={lessonItem.image}
                  introduction={lessonItem.introduction}
                />
              );
            })}
          </div>
          <div className="contact-container">
            <h3>お問い合わせ</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
