import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import Link from 'next/link'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { avatar, email, linkedin, github, blog } = content

  return (
    <main className="mx-auto max-w-[1024px] font-semibold">
      <div className="flex items-center justify-between gap-10 space-y-2 pt-6 md:space-y-5">
        <div className="flex flex-col justify-between">
          <h1 className="whitespace-pre-line text-[24px] font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-[28px] sm:leading-10 md:text-[36px] md:leading-14">
            <p>안녕하세요.</p>
            <p>Product Engineer 유준상입니다.</p>
          </h1>
          <div className="flex items-center space-x-4 pt-6">
            <SocialIcon kind="mail" href={`mailto:${email}`} />
            <SocialIcon kind="github" href={github} />
            <SocialIcon kind="linkedin" href={linkedin} />
            <a className="text-[18px]" href={blog} target="_blank">
              Blog
            </a>
          </div>
        </div>
        {avatar && (
          <Image
            src={avatar}
            alt="avatar"
            width={168}
            height={168}
            className="h-48 w-48 rounded-full"
          />
        )}
      </div>
      <ul className="flex flex-col gap-4 py-9">{children}</ul>
      <h3 className="mb-10 whitespace-pre border-b-[2px] border-black pb-4 text-[16px] font-bold leading-9 tracking-tight text-gray-900 dark:border-white dark:text-gray-100 sm:text-[28px] sm:leading-10 md:text-[36px] md:leading-14">
        Work Experience
      </h3>

      <div className="flex flex-col gap-10 pb-10">
        <div className="flex gap-10">
          <div className="flex w-[20%] flex-col gap-2 dark:border-white">
            <p className="text-2xl font-bold">클랩(CLAP)</p>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
              Frontend Engineer
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">2024.03 ~ 재직 중</p>
          </div>
          <div className="w-[80%] rounded-xl border border-teal-200 bg-teal-50 p-6 shadow-sm">
            <h2 className="mb-2 text-lg font-bold text-teal-800">
              💡 최고의 조직을 만드는 성장관리 솔루션 클랩을 개발, 유지보수합니다.
            </h2>
            <p className="text-sm text-gray-700">
              제품의 복잡도를 줄이고, 사용자 경험을 향상시키는 방향으로 기능을 설계하고 개발합니다.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <section className="text-md">
            <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-gray-100">
              📦 클라이언트–서버 간 계산 불일치로 발생할 수 있는 평가 오류를 사전에 차단했습니다.
            </h3>
            <ul className="flex flex-col gap-2 space-y-2 text-gray-700 dark:text-gray-200">
              <li>
                등급별 퍼센티지를 기반으로 할당 인원 수를 계산하는 과정에서, 클라이언트와 서버가
                각각 계산을 수행해야 하는 구조로 인해{' '}
                <strong>할당 인원 계산 및 소수점 처리 방식 차이에 따른 결과 불일치 가능성</strong>이
                존재했습니다.
              </li>
              <li>
                이를 해결하기 위해 특정 고객사의 실제 사용 시나리오를 기반으로
                기획·QA·서버·클라이언트가 함께 참여하는 싱크 미팅을 주도하고,{' '}
                <strong>엣지 케이스(소수점 계산)까지 포함한 테스트 케이스를 정의</strong>
                했습니다.
              </li>
              <li>
                정의된 TC를 기준으로 클라이언트와 서버 양쪽에 동일한 테스트 코드를 작성하도록 하여{' '}
                <strong>계산 로직의 일관성을 강제</strong>하고, 운영 단계에서의 평가 오류를 사전에
                방지했습니다.
              </li>
            </ul>
            <ul className="flex list-disc flex-col gap-2 pl-6 pt-4">
              <li>QA 과정에서 계산 관련 이슈 없이 검증 완료 → QA 리드타임 단축</li>
              <li>운영 배포 이후 관련 VOC 0건</li>
            </ul>
          </section>

          <section className="text-md">
            <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-gray-100">
              📦 대량 데이터 세팅을 사용자 주도로 전환하고, 동시 수정으로 인한 데이터 충돌 문제를
              해결했습니다.
            </h3>
            <ul className="flex flex-col gap-2 space-y-2 text-gray-700 dark:text-gray-200">
              <li>
                보상 대상자 및 리뷰 매칭 정보를 기존에는 서비스 내에서 수동으로 입력하거나, CS 팀이
                대신 세팅해야 하는 구조로 인해{' '}
                <strong>운영 비용이 높고 사용자 자율성이 제한되는 문제</strong>가 있었습니다.
              </li>
              <li>
                이를 해결하기 위해 엑셀 업로드를 통해 다수의 데이터를 한 번에 세팅할 수 있도록
                구현하여 <strong>사용자가 직접 대량 데이터를 관리할 수 있는 환경</strong>을
                구축했습니다.
              </li>
              <li>
                특히 여러 관리자가 동시에 데이터를 수정할 수 있는 환경에서 발생할 수 있는 충돌
                문제를 해결하기 위해,{' '}
                <strong>데이터 변경 이벤트를 감지하고 중앙에서 상태를 제어하는 구조</strong>를
                설계하고, <strong>수정 이력 기반으로 충돌 상황을 안내하는 UX</strong>를
                제공했습니다.
              </li>
              <li>
                이를 통해 운영 개입 없이 사용자가 직접 데이터를 처리할 수 있도록 개선하고,{' '}
                <strong>데이터 정합성을 유지하면서도 운영 공수를 절감</strong>했습니다.
              </li>
            </ul>
            <ul className="flex list-disc flex-col gap-2 pl-6 pt-4">
              <li>CS 팀이 수행하던 대량 세팅 작업을 사용자 기능으로 전환하여 운영 비용 절감</li>
              <li>
                동시 수정 상황에서도 데이터 충돌을 방지하는 구조를 설계해 안정적인 운영 환경 구축
              </li>
            </ul>
          </section>

          <section className="text-md">
            <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-gray-100">
              📦 사용자 행동을 재설계하고 기술 선택을 통해 테이블 성능 문제를 근본적으로
              해결했습니다.
            </h3>
            <ul className="flex flex-col gap-2 space-y-2 text-gray-700 dark:text-gray-200">
              <li>
                대규모 고객사 오픈을 앞두고 기존 테이블에서 전체 선택 후 모달을 여는 구조에서{' '}
                <strong>
                  선택된 모든 row id가 query params로 전달되며 URL length 제한을 초과하는 문제
                </strong>
                가 발생했습니다.
              </li>
              <li>
                로그 기반으로 사용자 행동을 분석한 결과 전체 선택 사용성이 낮음을 확인하고,{' '}
                <strong>페이지 단위 선택으로 인터랙션을 재설계</strong>하여 문제를 근본적으로
                해결했습니다.
              </li>
              <li>
                성능 개선 TF에 참여하여 dnd, 가상화 등 확장 요구사항을 만족하면서도 제한된 일정 내
                도입이 가능하도록{' '}
                <strong>
                  Material React Table을 채택하고 사내 디자인 시스템에 맞게 커스터마이징
                </strong>
                했습니다.
              </li>
              <li>
                Storybook 기반 PoC를 통해 빠르게 검증 및 공유하고,{' '}
                <strong>
                  가상 스크롤과 Optimistic Update를 적용하여 렌더링 성능과 사용자 응답성을 개선
                </strong>
                했습니다.
              </li>
            </ul>
            <ul className="flex list-disc flex-col gap-2 pl-6 pt-4">
              <li>
                사용자 인터랙션 구조 개선을 통해 URL length 초과로 발생하던 요청 실패 문제 해결
              </li>
              <li>
                가상화 및 Optimistic Update 도입으로 대용량 데이터 환경에서도 부드러운 UX 제공
              </li>
            </ul>
          </section>

          {/* 섹션 2 */}
          <section className="text-md p-5">
            <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-gray-100">
              🧪 메이커들의 생산성을 높이기 위해 노력합니다.
            </h3>
            <ul className="text-md list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-200">
              <li>
                <strong>CI 테스트 속도를 1200초에서 90초로 대폭 개선</strong>{' '}
                <Link
                  className="font-bold text-gray-900 underline dark:text-gray-200"
                  href="/blog/jest-speed-improvement"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (링크)
                </Link>
                <ul className="mt-1 flex list-disc items-start gap-1 pl-6 leading-relaxed">
                  <li>
                    ts-auto-mock의 런타임 타입 체크로 인한 성능 이슈를 해결하기 위해 createMock 유틸
                    함수를 개발하여 2600개의 테스트 케이스 실행 시간 단축
                  </li>
                </ul>
              </li>
              <li>
                <strong>릴리즈 커맨드를 자동 생성</strong>하는 기능 개발 및 npm 패키지 배포{' '}
                <Link
                  href="https://www.npmjs.com/package/generate-release-command"
                  className="font-bold text-gray-900 underline dark:text-gray-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (링크)
                </Link>
                <ul className="mt-1 flex list-disc items-start gap-1 pl-6 leading-relaxed">
                  <li>
                    이를 통해 릴리즈 드라이버가{' '}
                    <strong>
                      수동으로 커밋 해시를 수집하고, 시간 순으로 정렬하는 작업을 자동화
                    </strong>
                    하였습니다.
                  </li>
                </ul>
              </li>
              <li>
                <strong>
                  Production 배포 시에 자동으로 Git Tag를 생성하고 push 하도록 워크플로우를 개선
                </strong>
                <ul className="mt-1 flex list-disc items-start gap-1 pl-6 leading-relaxed">
                  <li>이를 통해 수동으로 Git Tag를 생성하고 push하는 불편함을 해결하였습니다.</li>
                </ul>
              </li>
            </ul>
          </section>

          {/* 섹션 3 */}
          <section className="text-md p-5">
            <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-gray-100">
              🛠 조직이 겪는 기술적인 문제를 피쳐 개발과 병렬적으로 해결합니다.
            </h3>
            <ul className="list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-200">
              <li>DTO ↔ 클라이언트 타입 불일치 이슈를 병렬적으로 해결하여 일정 지연 없이 배포</li>
            </ul>
          </section>
        </div>
      </div>

      <div className="flex gap-10 pb-10 max-[768px]:flex-col max-[768px]:gap-6">
        <div className="flex w-full flex-col gap-2 border-black dark:border-white min-[768px]:w-[20%] min-[768px]:border-r-[2px]">
          <p className="text-2xl font-bold">중고나라</p>
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300">Frontend Engineer</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">2023.03 ~ 2024.03</p>
        </div>
        <div className="flex flex-col gap-6 min-[768px]:w-[70%]">
          <div className="rounded-xl border border-teal-200 bg-teal-50 p-6 shadow-sm">
            <h2 className="mb-2 text-lg font-bold text-teal-800">
              �� MAU 160만의 중고나라 웹서비스, 앱서비스 내의 웹뷰를 개발 및 유지보수합니다.
            </h2>
            <p className="text-sm text-gray-700">
              중고거래 헤비 유저로서, 사용자 관점에서 다양한 의견을 제시하고, 개발 뿐 아니라 기획
              측면에서도 기여하였습니다.
            </p>
          </div>

          {/* 웹서비스 */}
          <section className="text-md p-5">
            <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-gray-100">
              🛒 매출이 없던 웹 서비스에서 앱 서비스 대비 10% 매출을 낼 수 있도록 기여하였습니다.
            </h3>
            <ul className="list-disc space-y-3 pl-6 text-gray-800 dark:text-gray-100">
              <li>
                <strong>Web Socket 기반</strong> 채팅 서비스 신규 구축으로 앱 대비 웹 서비스에서{' '}
                <strong>매출 10% 달성</strong>에 기여
              </li>
              <li>
                AWS Amplify의 고정 IP 미지원 문제를 파악하고,{' '}
                <strong>사내망 전용 테스트 환경</strong>을 <strong>Docker 기반</strong>으로
                마이그레이션
              </li>
              <li>
                <span className="font-medium">Tanstack Query의 staleTime/cacheTime</span> 설정을
                통해 네트워크 요청 수 최적화
              </li>
            </ul>
          </section>

          <section className="text-md p-5">
            <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-gray-100">
              🛠 한 명의 중고거래 유저의 관점에서, 제품 사용성 개선에 기여하였습니다.
            </h3>
            <ul className="list-disc space-y-3 pl-6">
              <li>
                <strong>Suspense & Lazy Loading</strong>을 활용해 스켈레톤 UI 제공,{' '}
                <strong>Network Waterfall 문제를 해결</strong>하여 로딩 속도 개선
              </li>
              <li>
                Elasticsearch의 비실시간성 이슈를 <strong>낙관적 업데이트</strong>로 해결하여 사용자
                대기 시간 최소화
              </li>
            </ul>
          </section>

          {/* 앱 내 웹뷰 */}
          <section className="text-md p-5">
            <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-gray-100">
              🔧 부족한 리소스에서도 코드 품질 개선을 멈추지 않았습니다.
            </h3>
            <ul className="list-disc space-y-3 pl-6">
              <li>
                <span className="font-medium">React Testing Library</span>로 배송 관련 UI 테스트를
                구축하여 QA 리소스 없이 <strong>'받는 분/보내는 분' 로직을 안정적으로 분리</strong>
              </li>
              <li>
                팀원이 개발한 로직을 <span className="font-medium">테스트 코드 기반으로 체화</span>
                하고, <strong>세븐일레븐 편의점 택배 서비스</strong> 기능을 안정적으로 런칭
              </li>
            </ul>
          </section>

          <section className="text-md p-5">
            <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-gray-100">
              📝 새로운 팀원이 빠르게 적응할 수 있도록 온보딩 가이드를 문서화하였습니다.
            </h3>
            <ul className="list-disc space-y-3 pl-6">
              <li>
                처음 들어오는 팀원이 생소해할 수 있는 AWS 환경 설정 및 사용법을 문서화하였습니다.
              </li>
              <li>웹, 앱 서비스의 히스토리 및 개발 환경을 문서화하였습니다.</li>
            </ul>
          </section>
        </div>
      </div>

      {/* 프로젝트 */}
      <h2 className="mb-10 whitespace-pre border-b-[2px] border-black pb-4 text-[24px] font-extrabold leading-9 tracking-tight text-gray-900 dark:border-white dark:text-gray-100 sm:text-[28px] sm:leading-10 md:text-[36px] md:leading-14">
        Project
      </h2>
      <div className="flex gap-10 pb-10 max-[768px]:flex-col max-[768px]:gap-6">
        <div className="flex w-full flex-col gap-2 border-black dark:border-white min-[768px]:w-[20%] min-[768px]:border-r-[2px]">
          <p className="text-lg font-bold">또잇또잇</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">2023.11 ~ 2024.02</p>
        </div>
        <div className="flex flex-col gap-10 min-[768px]:w-[70%]">
          <div className="flex flex-col gap-4">
            <p className="rounded-lg bg-teal-500 px-4 py-4 text-[18px] font-semibold">
              맛집을 알아보기 위한 새로운 기준을 제공합니다. <br />두 번 이상 간 내 맛집을 공유하는
              서비스
            </p>
            <ul className="flex list-disc flex-col gap-4 pl-6">
              <li>팀 리드로서 회의를 주도적으로 진행하고, 파트 별 일정관리를 담당하였습니다.</li>
              <li>로그인, 약관, 검색, 리뷰 작성 페이지 및 기능을 담당하여 개발하였습니다.</li>
              <li>
                Github Actions의 workflow를 통해 CI 단계에서 Lint, 빌드 테스트, 프리뷰 기능을
                추가하여 배포 시 에러가 발생할 수 있는 가능성을 낮췄습니다.
              </li>
              <li>
                첫 로그인 여부에 따른 리다이렉트 로직을 Next.js의 middleware를 활용하여 서버
                사이드에서 수행하도록 하였고, 이를 통해 사용자가 빈 화면을 보지 않도록 하였습니다.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 활동 */}
      <h2 className="mb-10 whitespace-pre border-b-[2px] border-black pb-4 text-[24px] font-extrabold leading-9 tracking-tight text-gray-900 dark:border-white dark:text-gray-100 sm:text-[28px] sm:leading-10 md:text-[36px] md:leading-14">
        Activity
      </h2>
      <div className="flex flex-col gap-[60px] pb-10">
        <div className="flex gap-10 pb-10 max-[768px]:flex-col max-[768px]:gap-6">
          <div className="flex w-full flex-col gap-2 border-black dark:border-white min-[768px]:w-[20%] min-[768px]:border-r-[2px]">
            <p className="text-lg font-bold">디프만 14, 15기</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">2023.11 ~ 2024.09</p>
          </div>
          <div className="flex flex-col gap-10 min-[768px]:w-[70%]">
            <div className="flex flex-col gap-4">
              <ul className="flex list-disc flex-col gap-4 pl-6">
                <li>
                  디자이너와 개발자가 만나 서비스 기획부터 런칭까지 하나의 프로덕트를 완성하며
                  성장하는 IT 커뮤니티인 디프만에 프론트엔드 개발자로 참여하였습니다.
                </li>
                <li>프로젝트 팀 리드를 담당하였습니다.</li>
                <li>15기에는 운영진으로 참여하여, 70명 규모의 행사를 전반적으로 관리하였습니다.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex gap-10 pb-10 max-[768px]:flex-col max-[768px]:gap-6">
          <div className="flex w-full flex-col gap-2 border-black dark:border-white min-[768px]:w-[20%] min-[768px]:border-r-[2px]">
            <p className="text-lg font-bold">SOPT 31기</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">2022.09 ~ 2023.01</p>
          </div>
          <div className="flex flex-col gap-10 min-[768px]:w-[70%]">
            <div className="flex flex-col gap-4">
              <ul className="flex list-disc flex-col gap-4 pl-6">
                <li>대학생 연합 IT 벤쳐창업 동아리인 SOPT에 프론트엔드 개발자로 참여하였습니다.</li>
                <li>기획자, 디자이너, 백엔드 개발자와 협업하여 서비스 배포를 경험하였습니다.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex gap-10 pb-10 max-[768px]:flex-col max-[768px]:gap-6">
          <div className="flex w-full flex-col gap-2 border-black dark:border-white min-[768px]:w-[20%] min-[768px]:border-r-[2px]">
            <p className="text-lg font-bold">멋쟁이사자처럼 프론트엔드 스쿨 2기</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">2022.03 ~ 2023.08</p>
          </div>
          <div className="flex flex-col gap-10 min-[768px]:w-[70%]">
            <div className="flex flex-col gap-4">
              <ul className="flex list-disc flex-col gap-4 pl-6">
                <li>멋쟁이사자처럼에서 주관하는 프론트엔드 스쿨 2기에 참여하였습니다.</li>
                <li>
                  프론트엔드 개발자 4명이 팀을 이뤄 React 기반 오픈마켓 서비스를 개발하였습니다.
                </li>
                <li>
                  팀장 역할을 수행하고, Git, Github 사용이 처음이라 어려움을 겪는 팀원들을 위해
                  프로젝트 이전 시뮬레이션을 기획하고 주도하였습니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 학력 */}
      <h2 className="mb-10 whitespace-pre border-b-[2px] border-black pb-4 text-[24px] font-extrabold leading-9 tracking-tight text-gray-800 dark:border-white dark:text-gray-100 sm:text-[28px] sm:leading-10 md:text-[36px] md:leading-14">
        Education
      </h2>
      <div>
        <p className="text-[20px]">경희대학교</p>
        <p className="text-[20px]">2017.03 ~ 2023.08</p>
        <p>산업경영공학과 졸업</p>
      </div>
    </main>
  )
}
