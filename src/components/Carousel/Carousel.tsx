'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

/**
 * Interfejs dla pojedynczego slajdu w karuzeli
 */
interface SlideData {
  id: number;
  content: string;
  bgColor: string;
}

/**
 * Props dla komponentu Carousel3D
 */
interface Carousel3DProps {
  /** Dane slajdów do wyświetlenia */
  slides: SlideData[];
  /** Szerokość pojedynczej karty w px (domyślnie: 350) */
  cardWidth?: number;
  /** Wysokość pojedynczej karty w px (domyślnie: 220) */
  cardHeight?: number;
  /** Promień koła karuzeli - im większy, tym dalej karty od centrum (domyślnie: 420) */
  radius?: number;
  /** Odstęp między kartami w px - wpływa na rozłożenie kart w okręgu (domyślnie: 90) */
  cardGap?: number;
  /** Czas trwania animacji przejścia w ms (domyślnie: 500) */
  animationDuration?: number;
  /** Prędkość auto-rotacji w stopniach na sekundę (domyślnie: 9) */
  autoRotationSpeed?: number;
  /** Czy włączyć auto-rotację (domyślnie: true) */
  autoRotation?: boolean;
  /** Czy pokazać przyciski nawigacyjne (domyślnie: true) */
  showNavigation?: boolean;
  /** Czy pokazać kropki nawigacyjne (domyślnie: true) */
  showDots?: boolean;
}

/**
 * Komponent Carousel3D - zaawansowana karuzela 3D z pełną konfiguracją
 *
 * Funkcje:
 * - Automatyczne obracanie z możliwością pauzowania
 * - Nawigacja strzałkami z zabezpieczeniem przed spamowaniem
 * - Nawigacja kropkami z najkrótszą ścieżką
 * - Responsywny design z 3D efektami
 * - Hover efekty z automatycznym snapowaniem do centrum
 * - Konfigurowalne wymiary, prędkości i animacje
 */
const Carousel3D: React.FC<Carousel3DProps> = ({
  slides,
  cardWidth = 350,
  cardHeight = 220,
  radius = 420,
  cardGap = 90,
  animationDuration = 500,
  autoRotationSpeed = 9, // stopni na sekundę
  autoRotation = true,
  showNavigation = true,
  showDots = true,
}) => {
  // Obliczenia podstawowe dla karuzeli
  const slidesCount = slides.length;
  const angleStep = 360 / slidesCount; // kąt między kartami

  // Obliczenie kroku animacji na podstawie prędkości
  const rotationStep = autoRotationSpeed / 60; // stopnie na klatkę (60fps)

  // Stany komponentu
  const [rotation, setRotation] = useState(0); // aktualny obrót w stopniach
  const [mounted, setMounted] = useState(false); // czy komponent jest zamontowany (SSR)
  const [isPaused, setIsPaused] = useState(false); // czy auto-rotacja jest zapauzowana
  const [instant, setInstant] = useState(false); // czy wyłączyć animacje dla natychmiastowego snapu
  const [isNavigating, setIsNavigating] = useState(false); // zabezpieczenie przed spamowaniem nawigacji
  const pauseTimeout = React.useRef<NodeJS.Timeout | null>(null);

  // Montowanie komponentu (unikanie problemów z SSR)
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-rotacja używająca requestAnimationFrame dla płynności
  React.useEffect(() => {
    if (!autoRotation || isPaused) return;

    let frameId: number;
    const animate = () => {
      setRotation((prev) => prev - rotationStep);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isPaused, autoRotation, rotationStep]);

  if (!mounted) return null;

  // Obliczenie aktualnego indeksu (środkowa karta)
  const currentIndex =
    ((Math.round(-rotation / angleStep) % slidesCount) + slidesCount) %
    slidesCount;

  // Funkcja snapowania do najbliższej karty
  const snapToNearest = () => {
    setInstant(true);
    const raw = -rotation / angleStep;
    const nearestIdx = Math.round(raw);
    setRotation(-nearestIdx * angleStep);
    setTimeout(() => setInstant(false), 0);
  };

  // Uniwersalna funkcja obliczająca najkrótszą drogę między indeksami
  const getShortestPath = (fromIdx: number, toIdx: number) => {
    let diff = toIdx - fromIdx;

    // Znajdź najkrótszą drogę (maksymalnie połowa okręgu)
    if (diff > slidesCount / 2) {
      diff -= slidesCount;
    } else if (diff < -slidesCount / 2) {
      diff += slidesCount;
    }

    return diff;
  };

  // Nawigacja poprzednia (strzałka w lewo = następna karta w prawo)
  const onPrevious = () => {
    if (isNavigating) return;
    setIsNavigating(true);
    setInstant(true);

    const nextIdx = (currentIndex + 1) % slidesCount;
    const diff = getShortestPath(currentIndex, nextIdx);
    setRotation((prev) => prev - diff * angleStep);

    setTimeout(() => setInstant(false), 0);
    setTimeout(() => setIsNavigating(false), animationDuration);
  };

  // Nawigacja następna (strzałka w prawo = poprzednia karta w lewo)
  const onNext = () => {
    if (isNavigating) return;
    setIsNavigating(true);
    setInstant(true);

    const prevIdx = (currentIndex - 1 + slidesCount) % slidesCount;
    const diff = getShortestPath(currentIndex, prevIdx);
    setRotation((prev) => prev - diff * angleStep);

    setTimeout(() => setInstant(false), 0);
    setTimeout(() => setIsNavigating(false), animationDuration);
  };

  // Przejście do konkretnego indeksu (kropki nawigacyjne)
  const goToIndex = (idx: number) => {
    if (currentIndex === idx) return;
    setInstant(true);

    const diff = getShortestPath(currentIndex, idx);
    setRotation((prev) => prev - diff * angleStep);

    setTimeout(() => setInstant(false), 0);
  };

  // Obsługa hover - pauzowanie i snapowanie
  const handleCardMouseEnter = () => {
    if (pauseTimeout.current) {
      clearTimeout(pauseTimeout.current);
      pauseTimeout.current = null;
    }
    setIsPaused(true);
    snapToNearest();
  };

  // Obsługa opuszczenia hover - wznowienie po opóźnieniu
  const handleCardMouseLeave = () => {
    if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
    pauseTimeout.current = setTimeout(() => {
      setIsPaused(false);
    }, 500);
  };

  return (
    <div className='w-full flex justify-center'>
      <div className='relative max-w-[1280px] w-full flex flex-col items-center py-8'>
        {/* Kontener karuzeli 3D */}
        <div
          className={`relative mx-auto flex items-center justify-center`}
          style={{
            width: `${cardWidth * 2}px`,
            height: `${cardHeight * 1.5}px`,
            perspective: '1600px',
          }}
        >
          {/* Grupa obracająca się w 3D */}
          <div
            className='relative w-full h-full'
            style={{
              transformStyle: 'preserve-3d',
              transition: instant
                ? 'none'
                : `transform ${animationDuration}ms cubic-bezier(.4,1,.6,1)`,
            }}
          >
            {/* Renderowanie kart */}
            {slides.map((slide, i) => {
              const angle = i * angleStep + rotation;
              const normalized = ((angle % 360) + 360) % 360;

              // Sprawdzenie czy karta jest na środku (aktywna)
              const isCenter =
                normalized < angleStep / 2 || normalized > 360 - angleStep / 2;

              // Obliczenie pozycji X dla efektu gap
              const rad = (Math.PI / 180) * angle;
              const xGap = Math.sin(rad) * cardGap;

              return (
                <div
                  key={slide.id}
                  className={`absolute left-1/2 top-1/2 flex items-center justify-center rounded-lg shadow-2xl backface-hidden ${slide.bgColor}`}
                  style={{
                    width: `${cardWidth}px`,
                    height: `${cardHeight}px`,
                    transform: `
                      translate(-50%, -50%)
                      rotateY(${angle}deg)
                      translateZ(${radius}px)
                      translateX(${xGap}px)
                      ${isCenter ? '' : 'scale(0.9)'}
                    `,
                    zIndex: isCenter ? 30 : 10,
                    filter: isCenter ? 'none' : '',
                    boxShadow: isCenter
                      ? '0 8px 32px rgba(0,0,0,0.25)'
                      : '0 2px 8px rgba(0,0,0,0.15)',
                    transition: `transform 1.5s cubic-bezier(.4,1,.6,1), scale 1s cubic-bezier(.4,1,.6,1)`,
                  }}
                  onMouseEnter={handleCardMouseEnter}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <p className='text-white text-2xl font-bold'>
                    {slide.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Kontrolki nawigacyjne */}
        {(showNavigation || showDots) && (
          <div
            className='flex items-center justify-center gap-6 mt-12'
            onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}
            style={{ minHeight: 56 }}
          >
            {/* Przycisk poprzedni */}
            {showNavigation && (
              <button
                onClick={onNext}
                disabled={isNavigating}
                className={`z-50 rounded-full p-2 transition-all duration-200 ${
                  isNavigating
                    ? 'bg-black/20 cursor-not-allowed'
                    : 'bg-black/40 hover:bg-black/70'
                }`}
                style={{ minWidth: 48, minHeight: 48 }}
                aria-label='Poprzedni slajd'
              >
                <ChevronLeft
                  className={`size-10 transition-colors ${
                    isNavigating ? 'text-white/50' : 'text-white'
                  }`}
                />
              </button>
            )}

            {/* Kropki nawigacyjne */}
            {showDots && (
              <div className='flex items-center gap-3'>
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToIndex(idx)}
                    aria-label={`Przejdź do slajdu ${idx + 1}`}
                    className={`w-4 h-4 rounded-full border-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/70
                      ${
                        currentIndex === idx
                          ? 'bg-white border-white shadow-lg'
                          : 'bg-white/30 border-white/50'
                      }`}
                  />
                ))}
              </div>
            )}

            {/* Przycisk następny */}
            {showNavigation && (
              <button
                onClick={onPrevious}
                disabled={isNavigating}
                className={`z-50 rounded-full p-2 transition-all duration-200 ${
                  isNavigating
                    ? 'bg-black/20 cursor-not-allowed'
                    : 'bg-black/40 hover:bg-black/70'
                }`}
                style={{ minWidth: 48, minHeight: 48 }}
                aria-label='Następny slajd'
              >
                <ChevronRight
                  className={`size-10 transition-colors ${
                    isNavigating ? 'text-white/50' : 'text-white'
                  }`}
                />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel3D;

// Przykładowe dane karuzeli - można je przenieść do osobnego pliku
export const exampleCarouselData: SlideData[] = [
  { id: 1, content: 'Slide 1', bgColor: 'bg-red-500' },
  { id: 2, content: 'Slide 2', bgColor: 'bg-blue-500' },
  { id: 3, content: 'Slide 3', bgColor: 'bg-green-500' },
  { id: 4, content: 'Slide 4', bgColor: 'bg-purple-500' },
  { id: 5, content: 'Slide 5', bgColor: 'bg-yellow-500' },
  { id: 6, content: 'Slide 6', bgColor: 'bg-black' },
  { id: 7, content: 'Slide 7', bgColor: 'bg-pink-500' },
  { id: 8, content: 'Slide 8', bgColor: 'bg-orange-500' },
  { id: 9, content: 'Slide 9', bgColor: 'bg-cyan-500' },
];

// Przykład użycia komponentu:
/*
<Carousel3D 
  slides={exampleCarouselData}
  cardWidth={400}
  cardHeight={250}
  radius={500}
  cardGap={120}
  animationDuration={600}
  autoRotationSpeed={12}
  autoRotation={true}
  showNavigation={true}
  showDots={true}
/>
*/
