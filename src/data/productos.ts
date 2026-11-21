// Los productos del concepto. Feiten: docs/merk-en-woordenlijst.md, deel A. Geen prijzen: die staan niet in de bron.
export interface Producto {
  id: string;
  name: string; // nombre tal como figura en el envase
  type: string; // tipo de producto y formato, en español
  kind: 'bano' | 'exfoliante' | 'mascarilla' | 'crema' | 'espuma' | 'proteccion';
  img: string;
  step?: number; // paso del protocolo en la home (0 a 4)
  href?: string; // ficha de producto, si existe en el concepto
}

export const PRODUCTOS: Producto[] = [
  { id: 'bano', name: 'SPA Wellness Fußbad', type: 'Baño de pies, 500 ml', kind: 'bano', img: 'bano', step: 0 },
  { id: 'exfoliante', name: 'fresh feet Fußpeeling', type: 'Exfoliante, 125 ml', kind: 'exfoliante', img: 'exfoliante', step: 1 },
  { id: 'mascarilla', name: 'Fuß-Vliesmaske Orange-Lemongras', type: 'Mascarilla, caja de 5 pares', kind: 'mascarilla', img: 'mascarilla', step: 2 },
  { id: 'crema', name: 'Fußcreme Orange-Lemongras', type: 'Crema, 125 ml', kind: 'crema', img: 'crema', step: 3 },
  {
    id: 'espuma',
    name: 'Cremeschaum Orange-Lemongras',
    type: 'Crema en espuma, 125 ml',
    kind: 'espuma',
    img: 'espuma',
    step: 4,
    href: '/productos/crema-en-espuma-orange-lemongras/',
  },
  { id: 'proteccion', name: 'Schutzcreme mit 10 % Urea', type: 'Crema con un 10 % de urea, 125 ml', kind: 'proteccion', img: 'proteccion' },
];

// Enlace de cada producto: su ficha si existe, si no su paso en la película de la home
export function enlace(p: Producto, enLaHome = false): string {
  if (p.href) return p.href;
  if (p.step !== undefined) return enLaHome ? '#inicio' : `/#paso-${p.step + 1}`;
  return '/tienda/';
}
