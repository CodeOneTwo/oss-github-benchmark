import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-visualization-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.scss'],
})
export class BubbleComponent implements OnInit {
  @Input() data: IData;
  @Input() options: {
    dimension1: string;
    dimension2: string;
    dimension3: string;
  };

  constructor() {}

  ngOnInit(): void {
    this.options = {
      dimension1: state.dimension1,
      dimension2: state.dimension2,
      dimension3: state.dimension3,
    };

    const bound = this.element.getBoundingClientRect();
    const width = bound.width;
    const height = bound.height - 64 - 40;
    const padding = 70;

    const data = state.csvData;
    // var data = [10, 20, 30];
    const orgs = [];
    console.log(data);
    // data.sort(
    //     (a, b) => parseInt(b.num_members) - parseInt(a.num_members)
    // );
    const colors = ['green', 'purple', 'yellow'];

    this.svg = d3
      .select(this.element)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    this.text = d3
      .select('body')
      .append('div')
      .attr('class', 'tooltip')
      .style('opacity', '0');

    this.yscale = d3.scaleLinear().range([height - padding, padding]);

    this.yAxis = d3.axisLeft().ticks(5);

    this.xscale = d3.scaleLinear().range([padding, width - padding]);

    this.xAxis = d3.axisBottom().ticks(5);

    this.xAxisGroup = this.svg
      .append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + (height - padding) + ')');

    this.yAxisGroup = this.svg
      .append('g')
      .attr('class', 'y axis')
      .attr('transform', 'translate(' + padding + ',0)');

    this.xLabel = this.svg
      .append('text')
      .attr(
        'transform',
        'translate(' + width / 2 + ' ,' + (height - (1 / 4) * padding) + ')'
      )
      .style('text-anchor', 'middle')
      .text(this.options.dimension1);

    this.yLabel = this.svg
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', padding / 4)
      .attr('x', 0 - height / 2)
      .style('text-anchor', 'middle')
      .text(this.options.dimension2);

    this.update(state);
  }
}
