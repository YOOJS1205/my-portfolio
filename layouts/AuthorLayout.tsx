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
    <main className="mx-auto max-w-[1024px] font-normal text-gray-800 dark:text-gray-200">
      {/* Profile Header */}
      <div className="flex items-center justify-between gap-10 pb-4 pt-8">
        <div className="flex flex-col justify-between">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 md:text-3xl">
            유준상 | Frontend Engineer
          </h1>
          <div className="flex items-center space-x-4 pt-4">
            <SocialIcon kind="mail" href={`mailto:${email}`} />
            <SocialIcon kind="github" href={github} />
            <SocialIcon kind="linkedin" href={linkedin} />
            <a
              className="text-base font-medium text-gray-600 underline underline-offset-4 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              href={blog}
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </a>
          </div>
        </div>
        {avatar && (
          <Image
            src={avatar}
            alt="avatar"
            width={120}
            height={120}
            className="h-28 w-28 rounded-full object-cover shadow-md md:h-32 md:w-32"
          />
        )}
      </div>

      {/* Top Summary (children from mdx) */}
      <div className="py-6">{children}</div>

      {/* Main Section Header Component */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Work Experience</h2>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          제품의 병목을 분석하고 기술적 의사결정을 통해 실질적인 비즈니스 가치와 안정성을
          만들어갑니다.
        </p>
      </div>

      {/* 1. 클랩 (CLAP) */}
      <div className="flex flex-col gap-8 pb-14">
        <div className="flex flex-col gap-6 md:flex-row md:gap-10">
          <div className="flex flex-col gap-1 md:w-[22%]">
            <p className="text-xl font-bold text-gray-900 dark:text-gray-100">클랩(CLAP)</p>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Frontend Engineer
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">2024.03 ~ 재직 중</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50/80 px-6 py-4 shadow-sm dark:border-gray-800 dark:bg-gray-900/50 md:w-[78%]">
            <p className="mb-1 text-sm font-bold text-gray-900 dark:text-gray-100 md:text-base">
              목표 관리, 리뷰 등으로 조직의 성장을 돕는 B2B SaaS 서비스{' '}
              <Link
                href="https://welcome.clap.company"
                target="_blank"
                className="ml-1 text-xs font-normal text-blue-600 underline underline-offset-2 dark:text-blue-400"
              >
                (웹사이트)
              </Link>
            </p>
            <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-400 md:text-sm">
              제품의 복잡도를 줄이고, 대규모 엔터프라이즈 환경에 맞춘 성능 최적화와 안정적인
              프론트엔드 아키텍처를 설계합니다.
            </p>
          </div>
        </div>

        {/* 클랩 상세 프로젝트 리스트 */}
        <div className="flex flex-col gap-10 pl-0 md:pl-2">
          {/* 클랩 1: CI 테스트 최적화 */}
          <section className="space-y-2.5">
            <h3 className="flex items-center gap-2 text-base font-bold text-gray-900 dark:text-gray-100 md:text-lg">
              TypeScript AST 병목 제거 및 경량 모킹 유틸 설계로 CI 시간 92.5% 단축
            </h3>
            <div className="space-y-1.5 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>
                •{' '}
                <strong className="text-gray-900 dark:text-gray-100">
                  TypeScript AST 트랜스포머 병목 특정:
                </strong>{' '}
                2,600여 개 테스트 케이스 실행 시,{' '}
                <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs dark:bg-gray-800">
                  ts-auto-mock
                </code>
                의 변환 비용으로 인한 <strong>CI 실행 지연(1,200초)</strong> 원인을 프로파일링으로
                분석
              </p>
              <p>
                •{' '}
                <strong className="text-gray-900 dark:text-gray-100">
                  경량화된 <code>createMock</code> 유틸 자체 설계:
                </strong>{' '}
                Partial Override와 타입 추론을 결합해 컴파일 타임 부하를 없애고 점진적인 코드베이스
                마이그레이션 주도
              </p>
              <p>
                •{' '}
                <strong className="text-gray-900 dark:text-gray-100">
                  CI 실행 시간 92.5% 단축:
                </strong>{' '}
                테스트 소요 시간을 <strong>1,200초에서 90초로 단축</strong>하여 팀 전체의 배포
                피드백 속도를 획기적으로 개선하고 무거운 라이브러리 의존성 제거
              </p>
            </div>
          </section>

          {/* 클랩 2: 계산 로직 일관성 */}
          <section className="space-y-2.5">
            <h3 className="flex items-center gap-2 text-base font-bold text-gray-900 dark:text-gray-100 md:text-lg">
              실시간 인원 산정 인터랙션 구현 및 클라이언트-서버 교차 검증으로 계산 오류 0건 달성
            </h3>
            <div className="space-y-1.5 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>
                •{' '}
                <strong className="text-gray-900 dark:text-gray-100">계산 오차 리스크 도출:</strong>{' '}
                등급별 비율 실시간 조정 시 클라이언트 독자 계산과 서버 산정 방식(소수점 처리, 엣지
                케이스) 불일치로 발생할 수 있는 <strong>크리티컬 평가 오류 위험</strong>을 사전에
                정의
              </p>
              <p>
                •{' '}
                <strong className="text-gray-900 dark:text-gray-100">
                  테스트 케이스 표준화 및 교차 검증:
                </strong>{' '}
                기획·서버·클라 싱크를 통해 고객사 시나리오 기반 엣지 케이스 TC를 합의하고, 양측
                레포지토리에 동일 테스트 작성으로 로직 정합성 강제
              </p>
              <p>
                •{' '}
                <strong className="text-gray-900 dark:text-gray-100">
                  배포 후 관련 VOC 0건 유지:
                </strong>{' '}
                복잡한 실시간 인원 산정 피처를 무장애로 런칭하고 QA 검증 리드타임 단축
              </p>
            </div>
          </section>

          {/* 클랩 3: 릴리즈 CLI 도구 */}
          <section className="space-y-2.5">
            <h3 className="flex items-center gap-2 text-base font-bold text-gray-900 dark:text-gray-100 md:text-lg">
              Notion/GitHub API 기반 릴리즈 CLI 도구 개발 및 배포 워크플로우 자동화
            </h3>
            <div className="space-y-1.5 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>
                •{' '}
                <strong className="text-gray-900 dark:text-gray-100">
                  내부 엔지니어 VOC 수집:
                </strong>{' '}
                잦은 Revert 및 수동 릴리즈 환경에서 릴리즈 드라이버가 노션과 PR을 수동 대조하며 겪는{' '}
                <strong>인지 부하와 커밋 순서 누락 위험</strong>을 문제로 발굴
              </p>
              <p>
                •{' '}
                <strong className="text-gray-900 dark:text-gray-100">사내 공통 CLI 제품화:</strong>{' '}
                Notion & GitHub API로 대상 PR의 Merge Commit Hash를 추적하고 의존성에 따라 커밋을
                자동 정렬하는 도구(
                <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs dark:bg-gray-800">
                  generate-release-command
                </code>
                )를 개발해 npm 배포
              </p>
              <p>
                •{' '}
                <strong className="text-gray-900 dark:text-gray-100">
                  단일 커맨드 기반 릴리즈 표준화:
                </strong>{' '}
                복잡한 검증 과정을 단 1회 명령어로 자동화하여{' '}
                <strong>매주 정기 릴리즈 시 발생하던 배포 지연 및 휴먼 에러 0건</strong> 달성
              </p>
            </div>
          </section>

          {/* 클랩 4: 대형 고객사 테이블 아키텍처 */}
          <section className="space-y-2.5">
            <h3 className="flex items-center gap-2 text-base font-bold text-gray-900 dark:text-gray-100 md:text-lg">
              대형 고객사 대응을 위한 대용량 테이블 아키텍처 개편 및 트리 데이터 렌더링 최적화
            </h3>
            <div className="space-y-1.5 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>
                •{' '}
                <strong className="text-gray-900 dark:text-gray-100">
                  Material React Table 선제적 PoC:
                </strong>{' '}
                대형 고객사 수주 데드라인을 맞추기 위해 가상화·DnD 요구사항을 검증(Storybook)하고
                MUI 디자인 시스템과 호환되는 MRT 도입 주도
              </p>
              <p>
                •{' '}
                <strong className="text-gray-900 dark:text-gray-100">
                  공통 Table 컴포넌트 및 계층 변환 유틸 설계:
                </strong>{' '}
                팀 내 재사용을 위한 상태 훅을 구축하고, 평면 데이터를 트리로 고속 변환하는{' '}
                <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs dark:bg-gray-800">
                  buildHierarchy
                </code>{' '}
                유틸을 구현해 렌더링 부하 최적화
              </p>
              <p>
                •{' '}
                <strong className="text-gray-900 dark:text-gray-100">
                  사용자 로그 기반 UX 재설계:
                </strong>{' '}
                다중 선택 시 발생하던 URL 길이 제한 초과 병목을 페이지네이션 기준(최대 100건) 선택
                UX로 재설계하여 <strong>요청 실패 0건 달성</strong>
              </p>
            </div>
          </section>

          {/* 클랩 5: Datadog 모니터링 */}
          <section className="space-y-2.5">
            <h3 className="flex items-center gap-2 text-base font-bold text-gray-900 dark:text-gray-100 md:text-lg">
              Datadog 기반 프론트엔드 관측 체계 구축 및 비즈니스 영향도 중심의 장애 대응 고도화
            </h3>
            <div className="space-y-1.5 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>
                •{' '}
                <strong className="text-gray-900 dark:text-gray-100">
                  Source map 연동 및 모니터링 일원화:
                </strong>{' '}
                서버 관측 환경에 맞춰 Datadog으로 마이그레이션하고, CI 내 Source map 자동 업로드를
                구축해 프로덕션 에러의 소스 라인 추적성 확보
              </p>
              <p>
                •{' '}
                <strong className="text-gray-900 dark:text-gray-100">
                  비즈니스 영향도 기반 에러 분류:
                </strong>{' '}
                커스텀{' '}
                <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs dark:bg-gray-800">
                  CriticalError
                </code>{' '}
                클래스를 설계해 결제/평가 등 치명적 실패 시 즉각 알림을 트리거하고 유관 부서 기준의
                알림 임계치(Threshold) 적용
              </p>
              <p>
                •{' '}
                <strong className="text-gray-900 dark:text-gray-100">디버깅 리드타임 단축:</strong>{' '}
                <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs dark:bg-gray-800">
                  datadogRum.addError
                </code>
                로 사용자 컨텍스트를 바인딩해 재현성을 확보하고 알림 노이즈를 제거하여 핵심 장애
                대응 속도 개선
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* 2. 중고나라 (초압축) */}
      <div className="flex flex-col gap-8 border-t border-gray-200 py-10 dark:border-gray-800">
        <div className="flex flex-col gap-6 md:flex-row md:gap-10">
          <div className="flex flex-col gap-1 md:w-[22%]">
            <p className="text-xl font-bold text-gray-900 dark:text-gray-100">중고나라</p>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Frontend Engineer
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">2023.03 ~ 2024.03</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50/80 px-6 py-4 shadow-sm dark:border-gray-800 dark:bg-gray-900/50 md:w-[78%]">
            <p className="mb-1 text-sm font-bold text-gray-900 dark:text-gray-100 md:text-base">
              국내 최대 규모 C2C 중고거래 플랫폼
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 md:text-sm">
              웹 플랫폼 내 신규 비즈니스 기능 구축 및 사용자 경험 최적화를 담당했습니다.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 pl-0 md:pl-2">
          <section className="space-y-3">
            <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 md:text-lg">
              웹 채팅 시스템 신규 런칭 및 웹 성능·품질 최적화
            </h3>
            <div className="space-y-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>
                • <strong className="text-gray-900 dark:text-gray-100">비즈니스 런칭:</strong> 웹
                채널 거래 전환율 향상을 위해{' '}
                <strong>웹소켓 기반 실시간 채팅 기능을 신규 구축</strong>하여 웹 서비스 매출
                활성화(앱 대비 10% 수준 확보)에 기여
              </p>
              <p>
                • <strong className="text-gray-900 dark:text-gray-100">성능 최적화:</strong>{' '}
                TanStack Query 캐싱 전략 수립과 Suspense & Lazy Loading 도입으로 초기 로딩 속도와
                렌더링 성능 개선
              </p>
              <p>
                • <strong className="text-gray-900 dark:text-gray-100">품질 보장:</strong> Docker
                기반 격리 테스트 환경 구축 및 UI 테스트 자동화로 배포 전 회귀 버그 사전 차단
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* 3. Community & Activities */}
      <div className="flex flex-col gap-6 border-t border-gray-200 py-10 dark:border-gray-800">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Community & Activities
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            지식을 나누고 함께 성장하는 환경을 만들기 위해 커뮤니티 활동과 사이드 프로젝트를
            지속하고 있습니다.
          </p>
        </div>

        <div className="flex flex-col gap-6 pl-0 md:pl-2">
          <section className="space-y-2">
            <div className="flex items-baseline justify-between">
              <h3 className="text-base font-bold text-gray-900 dark:text-gray-100">
                개발자 커뮤니티 운영 및 네트워킹 행사 리딩
              </h3>
              <span className="text-xs text-gray-500">2023 ~ 현재</span>
            </div>
            <div className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
              <p>
                •{' '}
                <strong className="text-gray-900 dark:text-gray-100">
                  70명 규모 개발자 네트워킹 행사 기획 및 총괄:
                </strong>{' '}
                현직 엔지니어 간 지식 교류와 고민 공유를 위한 오프라인 컨퍼런스를 주도적으로 기획 및
                운영
              </p>
              <p>
                •{' '}
                <strong className="text-gray-900 dark:text-gray-100">
                  프론트엔드 기술 스터디 리딩:
                </strong>{' '}
                아키텍처 및 최신 기술 트렌드를 분석하는 정기 스터디를 개설하여 팀원들과 러닝 커브
                공유
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* 4. Education */}
      <div className="flex flex-col gap-4 border-t border-gray-200 py-8 dark:border-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Education</h2>
        <div className="flex flex-col gap-2 md:flex-row md:gap-10">
          <div className="flex flex-col md:w-[22%]">
            <p className="text-base font-bold text-gray-900 dark:text-gray-100">경희대학교</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">2017.03 ~ 2023.08</p>
          </div>
          <div className="md:w-[78%]">
            <p className="text-sm text-gray-700 dark:text-gray-300">산업경영공학과 졸업</p>
          </div>
        </div>
      </div>
    </main>
  )
}
