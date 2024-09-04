package com.doantotnghiepptit.GiaoLuuCauLong.model.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Table(name = "matchs")
public class Match {
    @Id
    private Long id;
    private Integer pointTem1;
    private Integer pointTeam2;
    private LocalDateTime createAt;

    @OneToOne
    @JoinTable(name = "result_id")
    private Result result;

    @ManyToOne
    @JoinColumn(name = "league_table_id")
    private LeagueTable leagueTable;

    @ManyToMany
    @JoinTable(name = "match_team",
    joinColumns = @JoinColumn(name = "match_id"),
    inverseJoinColumns = @JoinColumn(name = "team_id"))
    private List<Team> teams;

}
